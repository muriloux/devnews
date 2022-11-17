import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { slug } = req.query;
      console.log(slug);
      const post = await prisma.post.findFirst({
        where: { slug: slug as string },
      });

      return res.status(200).json(post);
    }

    return res.status(400).json({ error: "use GET method" });
  } catch (error) {
    console.log(error);
  }
}
