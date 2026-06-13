import { readdirSync, statSync } from "fs";
import path from "path";
import MemoriesGalleryClient from "./MemoriesGalleryClient";

function getMemoryImages() {
  const publicDir = path.join(process.cwd(), "public", "img");
  const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

  return readdirSync(publicDir)
    .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => {
      const updatedAt = statSync(path.join(publicDir, file)).mtimeMs.toString(36);
      return `/img/${file}?v=${updatedAt}`;
    });
}

export default function MemoriesGallery() {
  const images = getMemoryImages();

  if (images.length === 0) {
    return null;
  }

  return <MemoriesGalleryClient images={images} />;
}
