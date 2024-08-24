import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadFolder = "src/public/avatar/";
const fullUploadFolderPath = join(process.cwd(), uploadFolder);

if (!fs.existsSync(fullUploadFolderPath)) {
  fs.mkdirSync(fullUploadFolderPath, { recursive: true });
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, fullUploadFolderPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!allowedFileTypes.includes(file.mimetype)) {
    return cb(new Error("Solo se permiten archivos JPEG y PNG."), false);
  }
  cb(null, true);
};

const limits = {
  fileSize: 1024 * 1024, 
  minWidth: 330,
  minHeight: 300,
};

const upload = multer({
  storage,
  fileFilter,
  limits,
});

export default upload;
