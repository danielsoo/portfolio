"use client";

import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { projects } from "@/data/projects";
import { firebaseAuth, isFirebaseConfigured } from "@/lib/firebase";
import { deleteProjectMedia, subscribeToProjectMedia, uploadProjectMedia } from "@/lib/projectMedia";
import type { ProjectMedia } from "@/types/projectMedia";

const MAX_IMAGE_BYTES = 15 * 1024 * 1024;
const MAX_VIDEO_BYTES = 200 * 1024 * 1024;

export default function MediaAdmin() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    if (!firebaseAuth) {
      setAuthLoading(false);
      return;
    }
    return onAuthStateChanged(firebaseAuth, (nextUser) => {
      setUser(nextUser);
      setAuthLoading(false);
    });
  }, []);

  return (
    <main className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-indigo-400">Portfolio CMS</p>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Project Media</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--foreground)]/55">
          Upload project images and videos to Firebase Storage. Captions, ordering, and project relationships are stored in Cloud Firestore.
        </p>

        {!isFirebaseConfigured ? <SetupNotice /> : authLoading ? <LoadingCard /> : user ? <MediaWorkspace user={user} /> : <LoginForm />}
      </div>
    </main>
  );
}

function SetupNotice() {
  return (
    <section className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
      <h2 className="font-bold text-amber-400">Firebase setup required</h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/60">
        Copy <code className="text-amber-300">.env.example</code> to <code className="text-amber-300">.env.local</code>, add your Firebase web app configuration, then restart the development server.
      </p>
      <p className="mt-2 text-xs text-[var(--foreground)]/40">Full setup steps are in FIREBASE_MEDIA_SETUP.md.</p>
    </section>
  );
}

function LoadingCard() {
  return <div className="mt-10 h-40 animate-pulse rounded-xl bg-[var(--foreground)]/[0.04]" />;
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!firebaseAuth) return;
    setSubmitting(true);
    setError("");
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch {
      setError("Unable to sign in. Check your email and password.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 max-w-md space-y-4 rounded-xl border border-[var(--foreground)]/10 p-6">
      <h2 className="font-bold">Administrator sign in</h2>
      <Field label="Email">
        <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className={inputClass} autoComplete="email" />
      </Field>
      <Field label="Password">
        <input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} className={inputClass} autoComplete="current-password" />
      </Field>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button disabled={submitting} className={primaryButtonClass}>
        {submitting ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

function MediaWorkspace({ user }: { user: User }) {
  const [projectSlug, setProjectSlug] = useState(projects[0].slug);
  const [items, setItems] = useState<ProjectMedia[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => subscribeToProjectMedia(projectSlug, setItems, () => setMessage("Could not load media.")), [projectSlug]);

  return (
    <div className="mt-10 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[var(--foreground)]/10 px-5 py-4">
        <div>
          <p className="text-sm font-semibold">Signed in</p>
          <p className="text-xs text-[var(--foreground)]/40">{user.email}</p>
        </div>
        <button onClick={() => firebaseAuth && signOut(firebaseAuth)} className="rounded-lg border border-[var(--foreground)]/15 px-3 py-2 text-xs hover:border-red-400/50 hover:text-red-400">
          Sign out
        </button>
      </div>

      <Field label="Project">
        <select value={projectSlug} onChange={(event) => setProjectSlug(event.target.value)} className={inputClass}>
          {projects.map((project) => <option key={project.slug} value={project.slug}>{project.title}</option>)}
        </select>
      </Field>

      <UploadForm projectSlug={projectSlug} existingCount={items.length} onMessage={setMessage} />
      {message && <p className="text-sm text-indigo-400">{message}</p>}

      <section>
        <h2 className="mb-4 text-lg font-bold">Uploaded media ({items.length})</h2>
        {items.length === 0 ? (
          <p className="rounded-xl border border-dashed border-[var(--foreground)]/15 p-8 text-center text-sm text-[var(--foreground)]/35">No Firebase media for this project yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item) => <AdminMediaCard key={item.id} item={item} onDeleted={() => setMessage("Media deleted.")} />)}
          </div>
        )}
      </section>
    </div>
  );
}

function UploadForm({ projectSlug, existingCount, onMessage }: { projectSlug: string; existingCount: number; onMessage: (message: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [alt, setAlt] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const file = fileRef.current?.files?.[0];
    if (!file) return onMessage("Choose an image or video first.");
    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) return onMessage("Only image and video files are supported.");
    const maxBytes = file.type.startsWith("video/") ? MAX_VIDEO_BYTES : MAX_IMAGE_BYTES;
    if (file.size > maxBytes) return onMessage(`File is too large. Maximum: ${file.type.startsWith("video/") ? "200 MB" : "15 MB"}.`);

    setUploading(true);
    setProgress(0);
    onMessage("");
    try {
      await uploadProjectMedia({ file, projectSlug, title, caption, alt, sortOrder: existingCount, onProgress: setProgress });
      if (fileRef.current) fileRef.current.value = "";
      setTitle("");
      setCaption("");
      setAlt("");
      onMessage("Upload complete. The project page updates automatically.");
    } catch (error) {
      onMessage(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.03] p-6 md:grid-cols-2">
      <div className="md:col-span-2"><h2 className="font-bold">Upload media</h2><p className="mt-1 text-xs text-[var(--foreground)]/40">Images up to 15 MB · Videos up to 200 MB</p></div>
      <Field label="File"><input ref={fileRef} type="file" required accept="image/*,video/*" className={fileInputClass} /></Field>
      <Field label="Title"><input value={title} onChange={(event) => setTitle(event.target.value)} className={inputClass} /></Field>
      <Field label="Alt text"><input value={alt} onChange={(event) => setAlt(event.target.value)} className={inputClass} placeholder="Describe the media for accessibility" /></Field>
      <Field label="Caption"><textarea value={caption} onChange={(event) => setCaption(event.target.value)} className={`${inputClass} min-h-24 resize-y`} /></Field>
      {uploading && <div className="md:col-span-2"><div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full bg-indigo-500 transition-all" style={{ width: `${progress}%` }} /></div><p className="mt-2 text-xs text-[var(--foreground)]/40">Uploading {Math.round(progress)}%</p></div>}
      <div className="md:col-span-2"><button disabled={uploading} className={primaryButtonClass}>{uploading ? "Uploading…" : "Upload"}</button></div>
    </form>
  );
}

function AdminMediaCard({ item, onDeleted }: { item: ProjectMedia; onDeleted: () => void }) {
  const [deleting, setDeleting] = useState(false);
  async function remove() {
    if (!window.confirm(`Delete ${item.title || "this media"}?`)) return;
    setDeleting(true);
    try { await deleteProjectMedia(item); onDeleted(); } finally { setDeleting(false); }
  }
  return (
    <article className="overflow-hidden rounded-xl border border-[var(--foreground)]/10">
      {item.type === "image" ? <img src={item.url} alt={item.alt} className="aspect-video w-full object-cover" /> : <video src={item.url} controls preload="metadata" className="aspect-video w-full bg-black object-contain" />}
      <div className="p-4"><p className="font-semibold">{item.title || "Untitled"}</p>{item.caption && <p className="mt-1 text-xs text-[var(--foreground)]/45">{item.caption}</p>}<button disabled={deleting} onClick={remove} className="mt-4 text-xs text-red-400 hover:text-red-300">{deleting ? "Deleting…" : "Delete"}</button></div>
    </article>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-xs font-mono text-[var(--foreground)]/45"><span className="mb-2 block uppercase tracking-wider">{label}</span>{children}</label>;
}

const inputClass = "w-full rounded-lg border border-[var(--foreground)]/15 bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition focus:border-indigo-500";
const fileInputClass = "w-full rounded-lg border border-dashed border-[var(--foreground)]/20 p-3 text-xs file:mr-3 file:rounded-md file:border-0 file:bg-indigo-500/15 file:px-3 file:py-2 file:text-indigo-400";
const primaryButtonClass = "rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50";
