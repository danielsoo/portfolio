export type ProjectMediaType = "image" | "video";

export type ProjectMedia = {
  id: string;
  projectSlug: string;
  type: ProjectMediaType;
  url: string;
  storagePath: string;
  title: string;
  caption: string;
  alt: string;
  sortOrder: number;
  createdAt?: unknown;
};
