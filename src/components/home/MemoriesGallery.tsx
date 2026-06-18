import { existsSync, readdirSync, statSync } from "fs";
import path from "path";
import MemoriesGalleryClient from "./MemoriesGalleryClient";

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function toPublicImagePath(relativePath: string) {
  return relativePath
    .split(path.sep)
    .map((part) => encodeURIComponent(part))
    .join("/");
}

function getMemoryImages() {
  const publicDir = path.join(process.cwd(), "public", "img");

  if (!existsSync(publicDir)) {
    return [];
  }

  function readImages(directory: string): Array<{ path: string; updatedAt: number }> {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return readImages(fullPath);
      }

      if (!entry.isFile() || !imageExtensions.has(path.extname(entry.name).toLowerCase())) {
        return [];
      }

      const relativePath = path.relative(publicDir, fullPath);
      return [{ path: relativePath, updatedAt: statSync(fullPath).mtimeMs }];
    });
  }

  return readImages(publicDir)
    .sort((a, b) => b.updatedAt - a.updatedAt || a.path.localeCompare(b.path))
    .map((image) => `/img/${toPublicImagePath(image.path)}?v=${image.updatedAt.toString(36)}`);
}

export default function MemoriesGallery() {
  const images = getMemoryImages();

  if (images.length === 0) {
    return null;
  }

  return <MemoriesGalleryClient images={images} />;
}
