import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as cheerio from "cheerio";

const projectIds = ["656977", "892382", "967466", "1040210", "494413", "1153951", "688927", "732906", "497457", "510633", "956633", "969103", "501009", "1080238", "490340", "665609", "501579", "1218077"];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const downloadPromises = projectIds.map(async (projectId) => {
      try {
        const response = await axios.get(`https://img.shields.io/curseforge/dt/${projectId}`);

        const $ = cheerio.load(response.data, { xmlMode: true });
        const downloadCountText = $("text").last().text().trim(); 

        let downloadCount = 0;
        if (downloadCountText.endsWith("M")) {
          downloadCount = Math.ceil(parseFloat(downloadCountText.replace("M", "")) * 1_000_000);
        } else if (downloadCountText.endsWith("k")) { 
          downloadCount = Math.ceil(parseFloat(downloadCountText.replace("k", "")) * 1_000);
        } else {
          downloadCount = parseInt(downloadCountText.replace(/,/g, ""), 10);
        }

        if (isNaN(downloadCount)) {
          throw new Error(`Failed to parse download count for project ${projectId}`);
        }

        return downloadCount;
      } catch (error) {
        console.error(`Error fetching downloads for project ${projectId}:`, error);
        return 0;
      }
    });

    const downloadCounts = await Promise.all(downloadPromises);
    console.log("Download counts for all projects:", downloadCounts);

    const totalDownloads = downloadCounts.reduce((sum, count) => sum + count, 0);
    console.log("Total downloads across all projects:", totalDownloads);

    res.status(200).json({ totalDownloads });
  } catch (error) {
    console.error("Error fetching CurseForge downloads:", error);
    res.status(500).json({ error: "Failed to fetch CurseForge downloads" });
  }
}
