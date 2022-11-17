// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../libs/prisma";
import createExcerptService from "../../../services/createExcerptService";
import createSlugService from "../../../services/createSlugService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { title, content } = req.body;

      const post = await prisma.post.create({
        data: {
          title: title,
          content: content,
          excerpt: createExcerptService(content),
          slug: createSlugService(title),
        },
      });

      return res.status(200).json(post);
    }

    return res.status(400).json({ error: "use POST method" });
  } catch (error) {
    console.log(error);
  }
}
