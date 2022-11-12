import { prisma } from "../../libs/prisma";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const posts = await prisma.post.findMany();
      return res.status(200).json(posts);
    }
    if (req.method === "POST") {
      return res.status(200).send("POST method");
    }

    return res.status(400).json({ error: "Unexpected error" });
  } catch (error) {
    console.log(error);
  }
}
