import { PrismaClient } from "@prisma/client";
import createExcerptService from "../../src/services/createExcerptService";
import createSlugService from "../../src/services/createSlugService";

class Post {
  title: string;
  content: string;
  excerpt: string;
  slug: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.excerpt = createExcerptService(this.content);
    this.slug = createSlugService(this.title);
  }
}

const post0 = new Post(
  "Typescript is the future!",
  "Aute laboris aliquip adipisicing magna reprehenderit nostrud consectetur nulla sit. Non sint ad irure veniam excepteur officia consectetur. Aliquip esse esse reprehenderit est veniam enim. Voluptate veniam qui elit irure ut sint tempor esse esse."
);
const post1 = new Post(
  "Brazilian election depends on a computer with Linux!",
  "Proident duis excepteur aliquip proident proident qui proident. Ullamco labore amet amet consectetur ipsum ullamco aute aute eiusmod. Magna id consectetur elit id nostrud officia est qui aliqua veniam. Cillum enim sunt adipisicing laborum magna eiusmod consectetur laborum irure officia laborum enim. Aliqua nisi esse exercitation duis. Adipisicing id reprehenderit adipisicing non do officia culpa."
);
const post2 = new Post(
  "Elon Musk buys twitter!",
  "Anim incididunt ad ullamco adipisicing. Aliqua sint nisi dolor reprehenderit eu minim. Voluptate quis laboris quis nisi elit minim elit non deserunt sit fugiat. Minim sint velit esse exercitation tempor eiusmod est. Est est laborum in voluptate nostrud cupidatat veniam labore reprehenderit enim. Esse qui incididunt sunt sunt mollit."
);
const post3 = new Post(
  "Github Copilot could be stealing your code?",
  "Magna sunt non reprehenderit et irure. Eu incididunt veniam et proident anim. Culpa ad incididunt et Lorem."
);
const post4 = new Post(
  "Is Linux really safe?",
  "Ex eu anim dolore enim. Exercitation aute excepteur quis tempor occaecat laborum cillum id et. Exercitation adipisicing non pariatur aliqua adipisicing Lorem ut quis. Incididunt velit quis veniam incididunt consequat ipsum nulla tempor exercitation voluptate et veniam consequat. Aliqua id magna occaecat officia."
);

const prisma = new PrismaClient();
async function main() {
  const p0 = await prisma.post.create({
    data: {
      title: post0.title,
      content: post0.content,
      excerpt: post0.excerpt,
      slug: post0.slug,
    },
  });
  const p1 = await prisma.post.create({
    data: {
      title: post1.title,
      content: post1.content,
      excerpt: post1.excerpt,
      slug: post1.slug,
    },
  });
  const p2 = await prisma.post.create({
    data: {
      title: post2.title,
      content: post2.content,
      excerpt: post2.excerpt,
      slug: post2.slug,
    },
  });
  const p3 = await prisma.post.create({
    data: {
      title: post3.title,
      content: post3.content,
      excerpt: post3.excerpt,
      slug: post3.slug,
    },
  });
  const p4 = await prisma.post.create({
    data: {
      title: post4.title,
      content: post4.content,
      excerpt: post4.excerpt,
      slug: post4.slug,
    },
  });

  console.log({ p0, p1, p2, p3, p4 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
