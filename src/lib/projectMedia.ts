import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { firebaseDb, firebaseStorage } from "./firebase";
import type { ProjectMedia } from "@/types/projectMedia";

const COLLECTION = "projectMedia";

export function subscribeToProjectMedia(
  projectSlug: string,
  onChange: (items: ProjectMedia[]) => void,
  onError?: (error: Error) => void,
) {
  if (!firebaseDb) {
    onChange([]);
    return () => undefined;
  }

  const mediaQuery = query(
    collection(firebaseDb, COLLECTION),
    where("projectSlug", "==", projectSlug),
  );

  return onSnapshot(
    mediaQuery,
    (snapshot) => {
      const items = snapshot.docs
        .map((mediaDoc) => ({ id: mediaDoc.id, ...mediaDoc.data() }) as ProjectMedia)
        .sort((a, b) => a.sortOrder - b.sortOrder);
      onChange(items);
    },
    (error) => onError?.(error),
  );
}

type UploadInput = {
  file: File;
  projectSlug: string;
  title: string;
  caption: string;
  alt: string;
  sortOrder: number;
  onProgress?: (progress: number) => void;
};

export async function uploadProjectMedia({
  file,
  projectSlug,
  title,
  caption,
  alt,
  sortOrder,
  onProgress,
}: UploadInput) {
  if (!firebaseDb || !firebaseStorage) throw new Error("Firebase is not configured.");

  const type = file.type.startsWith("video/") ? "video" : "image";
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const storagePath = `projects/${projectSlug}/${Date.now()}-${safeName}`;
  const storageRef = ref(firebaseStorage, storagePath);
  const uploadTask = uploadBytesResumable(storageRef, file, { contentType: file.type });

  await new Promise<void>((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => onProgress?.((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
      reject,
      resolve,
    );
  });

  const url = await getDownloadURL(storageRef);
  return addDoc(collection(firebaseDb, COLLECTION), {
    projectSlug,
    type,
    url,
    storagePath,
    title: title.trim(),
    caption: caption.trim(),
    alt: alt.trim() || title.trim() || `${projectSlug} ${type}`,
    sortOrder,
    createdAt: serverTimestamp(),
  });
}

export async function deleteProjectMedia(media: ProjectMedia) {
  if (!firebaseDb || !firebaseStorage) throw new Error("Firebase is not configured.");
  await deleteObject(ref(firebaseStorage, media.storagePath));
  await deleteDoc(doc(firebaseDb, COLLECTION, media.id));
}
