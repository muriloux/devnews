// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../../libs/prisma";
export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const posts = await prisma.post.findMany();
      return res.status(200).json(posts);
    }

    return res.status(400).json({ error: "use GET method" });
  } catch (error) {
    console.log(error);
  }
}
