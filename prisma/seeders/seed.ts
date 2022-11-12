import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const post = await prisma.post.create({
    data: {
      title: "Typescript is the future!",
      content:
        "Aute laboris aliquip adipisicing magna reprehenderit nostrud consectetur nulla sit. Non sint ad irure veniam excepteur officia consectetur. Aliquip esse esse reprehenderit est veniam enim. Voluptate veniam qui elit irure ut sint tempor esse esse.",
    },
  });
  const post2 = await prisma.post.create({
    data: {
      title: "Brazilian election depends on a computer with Linux!",
      content:
        "Deserunt sunt commodo proident dolor duis labore. Magna velit voluptate sit consequat duis laboris officia reprehenderit voluptate dolore et et. Cupidatat quis dolore velit non ullamco laboris qui aute ad. Aliqua ea cillum tempor officia et excepteur ex commodo tempor sit velit cillum aliquip pariatur. Adipisicing tempor enim voluptate esse ullamco duis. Dolore nostrud pariatur ex irure exercitation enim adipisicing reprehenderit consectetur adipisicing aliqua cupidatat. Mollit cupidatat velit consequat cupidatat nisi eiusmod ut enim est elit consectetur esse quis voluptate.",
    },
  });
  const post3 = await prisma.post.create({
    data: {
      title: "Elon Musk buys twitter!",
      content:
        "Proident duis excepteur aliquip proident proident qui proident. Ullamco labore amet amet consectetur ipsum ullamco aute aute eiusmod. Magna id consectetur elit id nostrud officia est qui aliqua veniam. Cillum enim sunt adipisicing laborum magna eiusmod consectetur laborum irure officia laborum enim. Aliqua nisi esse exercitation duis. Adipisicing id reprehenderit adipisicing non do officia culpa.",
    },
  });
  const post4 = await prisma.post.create({
    data: {
      title: "Github Copilot could be stealing your code?",
      content:
        "Id veniam fugiat incididunt sint mollit elit magna Lorem culpa ut. Occaecat eu ullamco exercitation enim anim mollit labore anim duis laboris excepteur duis. Excepteur id fugiat et pariatur exercitation eiusmod laborum ut id labore cupidatat in labore pariatur. Ex et ea velit dolore tempor sint magna do et et aliquip adipisicing commodo cupidatat. Deserunt reprehenderit tempor ea eiusmod fugiat laborum nulla reprehenderit qui ad.",
    },
  });
  const post5 = await prisma.post.create({
    data: {
      title: "Is Linux really safe?",
      content:
        "Dolor irure duis minim reprehenderit consequat nulla. Eiusmod dolore occaecat sint anim et aute duis dolore qui in adipisicing. Eu fugiat reprehenderit enim nisi esse eu non dolor occaecat officia. Do ex non dolor fugiat. Laborum anim id ea id. Reprehenderit deserunt consequat exercitation qui elit cillum ut veniam adipisicing qui anim do. Culpa enim minim elit est.",
    },
  });

  console.log({ post, post2, post3, post4, post5 });
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
