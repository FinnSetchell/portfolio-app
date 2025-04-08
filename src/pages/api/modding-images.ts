import { promises as fs } from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const moddingFolder = path.join(process.cwd(), "public", "modding");
    const files = await fs.readdir(moddingFolder);

    const imagePaths = files
      .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map((file) => `/modding/${file}`);

    res.status(200).json(imagePaths);
  } catch (error) {
    console.error("Error reading modding folder:", error);
    res.status(500).json({ error: "Failed to load images" });
  }
}
