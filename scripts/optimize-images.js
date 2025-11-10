// scripts/optimize-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public/images";
const MAX_WIDTH = 1920;
const QUALITY = 80; // 75–85 είναι ιδανικό για Vercel

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const validExt = [".jpg", ".jpeg", ".png"];
  if (!validExt.includes(ext)) return; // αγνόησε ήδη .webp

  const outputPath = filePath.replace(ext, ".webp");

  try {
    const buffer = await sharp(filePath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toBuffer();

    await fs.promises.writeFile(outputPath, buffer);
    console.log("Optimized:", path.basename(filePath));
  } catch (err) {
    console.warn("Skipped (error):", path.basename(filePath), "-", err.message);
  }
}

async function processDir(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) await processDir(fullPath);
    else await optimizeImage(fullPath);
  }
}

processDir(inputDir)
  .then(() => console.log("✅ Optimization complete."))
  .catch((err) => console.error("❌ Error:", err));
