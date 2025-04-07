import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const moddingFolder = path.join(process.cwd(), "public", "modding");
  try {
    const files = await fs.readdir(moddingFolder);
    const imagePaths = files.map((file) => `/modding/${file}`);
    res.status(200).json(imagePaths);
  } catch (error) {
    console.error("Error reading modding folder:", error);
    res.status(500).json({ error: "Failed to load images" });
  }
}
