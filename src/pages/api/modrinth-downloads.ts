import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch("https://api.modrinth.com/v2/user/eR2brCFq/projects");
    if (!response.ok) {
      throw new Error(`Failed to fetch Modrinth projects: ${response.statusText}`);
    }
    const projects = await response.json();
    const totalDownloads = projects.reduce(
      (sum: number, project: { downloads: number }) => sum + project.downloads,
      0
    );
    res.status(200).json({ totalDownloads });
  } catch (error) {
    console.error("Error fetching Modrinth downloads:", error);
    res.status(500).json({ error: "Failed to fetch Modrinth downloads" });
  }
}
