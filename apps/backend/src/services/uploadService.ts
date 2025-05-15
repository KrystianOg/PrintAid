import multer from "multer";
import sharp from "sharp";
import path from "path";

export const upload = multer({
  dest: "public/uploads/images",
  limits: { fileSize: 10_000_000 },
});

export const resizeImage = async (filePath: string) => {
  const thumbPath = path.join(
    "public/uploads/thumbnails",
    path.basename(filePath),
  );

  await sharp(filePath).resize(200).toFile(thumbPath);
  return thumbPath;
};
