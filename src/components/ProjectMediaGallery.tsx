"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { isFirebaseConfigured } from "@/lib/firebase";
import { subscribeToProjectMedia } from "@/lib/projectMedia";
import type { ProjectMedia } from "@/types/projectMedia";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";

type Props = {
  projectSlug: string;
  projectTitle: string;
  staticImages: string[];
  staticVideos: string[];
};

export default function ProjectMediaGallery({ projectSlug, projectTitle, staticImages, staticVideos }: Props) {
  const { locale, t } = useLocale();
  const [media, setMedia] = useState<ProjectMedia[]>([]);
  const [loading, setLoading] = useState(isFirebaseConfigured);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStartXRef = useRef<number | null>(null);
  const lastWheelAtRef = useRef(0);

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    return subscribeToProjectMedia(
      projectSlug,
      (items) => {
        setMedia(items);
        setLoading(false);
      },
      () => setLoading(false),
    );
  }, [projectSlug]);

  const imageMedia = media.filter((item) => item.type === "image");
  const videoMedia = media.filter((item) => item.type === "video");
  const galleryItems: GalleryItem[] = [
    ...staticImages.map((src, index) => ({
      key: `static-image-${src}`,
      type: "image" as const,
      src,
      alt: `${projectTitle} ${t(messages.projectDetail.screenshotAlt)} ${index + 1}`,
    })),
    ...imageMedia.map((item) => ({
      key: item.id,
      type: "image" as const,
      src: item.url,
      alt: item.alt,
      title: item.title,
      caption: item.caption,
      unoptimized: true,
    })),
    ...staticVideos.map((src, index) => ({
      key: `static-video-${src}`,
      type: "video" as const,
      src,
      alt: `${projectTitle} competition video ${index + 1}`,
    })),
    ...videoMedia.map((item) => ({
      key: item.id,
      type: "video" as const,
      src: item.url,
      alt: item.alt || item.title,
      title: item.title,
      caption: item.caption,
    })),
  ];
  const hasMedia = staticImages.length > 0 || staticVideos.length > 0 || media.length > 0;

  const selectItem = (index: number) => {
    if (!galleryItems.length) return;
    setActiveIndex((index + galleryItems.length) % galleryItems.length);
  };

  const activeItemType = galleryItems[activeIndex]?.type;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !galleryItems.length) return;

    let transitionTimer: number | undefined;
    let activeVideo: HTMLVideoElement | undefined;
    const advance = () => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % galleryItems.length);
    };
    const handleVideoEnded = () => {
      transitionTimer = window.setTimeout(advance, 2_000);
    };
    const slides = Array.from(carousel.children);

    carousel.querySelectorAll("video").forEach((video) => {
      const slide = video.closest("figure");
      if (slide && slides.indexOf(slide) === activeIndex) {
        activeVideo = video;
        video.defaultMuted = false;
        video.muted = false;
        video.volume = 1;
        video.currentTime = 0;
        video.addEventListener("ended", handleVideoEnded);
        void video.play().catch(() => {
          // Unmuted autoplay can still require one interaction under browser policy.
        });
      } else {
        video.pause();
      }
    });

    if (activeItemType === "image") {
      transitionTimer = window.setTimeout(advance, 5_000);
    }

    return () => {
      if (transitionTimer !== undefined) window.clearTimeout(transitionTimer);
      activeVideo?.removeEventListener("ended", handleVideoEnded);
    };
  }, [activeIndex, activeItemType, galleryItems.length]);

  if (loading && !staticImages.length && !staticVideos.length) {
    return <div className="mb-12 h-52 rounded-xl bg-[var(--foreground)]/[0.03] animate-pulse" />;
  }

  if (!hasMedia) {
    return (
      <div className="mb-12 rounded-xl border-2 border-dashed border-[var(--foreground)]/15 bg-[var(--foreground)]/[0.02] h-52 flex flex-col items-center justify-center text-[var(--foreground)]/25">
        <ImagePlaceholderIcon />
        <p className="text-sm font-mono mt-3">{t(messages.projectDetail.addImagesLine)}</p>
        <p className="text-xs font-mono mt-1 text-indigo-400/50">
          Firebase / public/projects/{projectSlug}/
        </p>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div
        className="relative h-[clamp(16rem,43vw,28rem)] overflow-hidden rounded-2xl bg-black shadow-2xl shadow-black/10"
        style={{ perspective: "1200px" }}
      >
        <div
          ref={carouselRef}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") selectItem(activeIndex - 1);
            if (event.key === "ArrowRight") selectItem(activeIndex + 1);
          }}
          onPointerDown={(event) => {
            if ((event.target as HTMLElement).closest("video, button")) return;
            dragStartXRef.current = event.clientX;
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerUp={(event) => {
            if (dragStartXRef.current === null) return;
            const distance = event.clientX - dragStartXRef.current;
            dragStartXRef.current = null;
            if (distance > 50) selectItem(activeIndex - 1);
            if (distance < -50) selectItem(activeIndex + 1);
          }}
          onPointerCancel={() => {
            dragStartXRef.current = null;
          }}
          onDragStart={(event) => event.preventDefault()}
          onWheel={(event) => {
            if (Math.abs(event.deltaX) < Math.abs(event.deltaY) || Math.abs(event.deltaX) < 30) return;
            event.preventDefault();
            const now = Date.now();
            if (now - lastWheelAtRef.current < 450) return;
            lastWheelAtRef.current = now;
            selectItem(activeIndex + (event.deltaX > 0 ? 1 : -1));
          }}
          tabIndex={0}
          aria-label={`${projectTitle} media gallery`}
          className="absolute inset-0 touch-pan-y select-none outline-none"
        >
          {galleryItems.map((item, index) => {
            const offset = getCircularOffset(index, activeIndex, galleryItems.length);
            const distance = Math.abs(offset);
            const isActive = offset === 0;
            const isVisible = distance <= 2;

            return (
              <figure
                key={item.key}
                aria-hidden={!isActive}
                onClick={() => {
                  if (distance === 1) selectItem(index);
                }}
                className={`absolute inset-y-0 left-[10%] w-[80%] overflow-hidden bg-black shadow-2xl transition-[transform,opacity,filter] duration-500 ease-out md:left-[14%] md:w-[72%] ${
                  isActive ? "" : "cursor-pointer"
                }`}
                style={{
                  transform: `translateX(${offset * 84}%) scale(${isActive ? 1 : distance === 1 ? 0.82 : 0.68}) rotateY(${offset * -7}deg)`,
                  opacity: distance === 0 ? 1 : distance === 1 ? 0.58 : 0,
                  filter: isActive ? "brightness(1)" : "brightness(0.55)",
                  pointerEvents: distance <= 1 ? "auto" : "none",
                  zIndex: 20 - distance,
                  transformStyle: "preserve-3d",
                }}
              >
                {isVisible && (
                  <>
                    <div className="relative h-full w-full bg-black">
                      {item.type === "image" ? (
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          draggable={false}
                          unoptimized={item.unoptimized}
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(min-width: 1024px) 646px, 80vw"
                          className="object-contain"
                        />
                      ) : (
                        <video
                          controls={isActive}
                          autoPlay={isActive}
                          preload="metadata"
                          playsInline
                          className="h-full w-full object-contain"
                          aria-label={item.alt}
                        >
                          <source src={item.src} />
                        </video>
                      )}
                    </div>
                    {(item.title || item.caption) && (
                      <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#0d0d1a]/95 px-5 py-4 backdrop-blur">
                        {item.title && <p className="text-sm font-semibold text-white/85">{item.title}</p>}
                        {item.caption && <p className="mt-1 text-xs leading-relaxed text-white/50">{item.caption}</p>}
                      </figcaption>
                    )}
                  </>
                )}
              </figure>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => selectItem(activeIndex - 1)}
          aria-label={locale === "ko" ? "이전 미디어" : "Previous media"}
          className="absolute left-3 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur transition hover:scale-105 hover:bg-black/85"
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          onClick={() => selectItem(activeIndex + 1)}
          aria-label={locale === "ko" ? "다음 미디어" : "Next media"}
          className="absolute right-3 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur transition hover:scale-105 hover:bg-black/85"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className="mt-3 flex items-center gap-4 px-1">
        <span className="min-w-16 text-xs font-mono text-[var(--foreground)]/45">
          {String(activeIndex + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
        </span>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-[var(--foreground)]/10">
          <div
            className="h-full rounded-full bg-indigo-500 transition-[width] duration-300"
            style={{ width: `${((activeIndex + 1) / galleryItems.length) * 100}%` }}
          />
        </div>
        <span className="hidden text-xs text-[var(--foreground)]/35 sm:block">
          {locale === "ko" ? "옆 콘텐츠를 누르거나 스와이프" : "Click a side card or swipe"}
        </span>
      </div>
    </div>
  );
}

type GalleryItem = {
  key: string;
  type: "image" | "video";
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  unoptimized?: boolean;
};

function getCircularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function ChevronLeftIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
    </svg>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Z" />
    </svg>
  );
}
