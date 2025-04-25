// pages/api/qcm/[slug].ts
import { getQcmFromMarkdown } from "@/lib/getQcmFromMarkdown";
import { NextApiRequest, NextApiResponse } from "next";

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (typeof slug !== "string") {
    return res.status(400).json({ error: "Invalid slug" });
  }

  try {
    const qcm = getQcmFromMarkdown(slug);
    res.status(200).json(qcm);
  } catch (error) {
    res.status(500).json({ error: "Could not load QCM" });
  }
}
