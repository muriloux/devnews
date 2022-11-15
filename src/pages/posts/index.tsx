import { GetStaticProps } from "next";
import Link from "next/link";
import { SEO } from "../../components/SEO";
import { prisma } from "../../libs/prisma";
import safeJsonStringify from "safe-json-stringify";
import styles from "./posts.module.scss";
import { formatDistance } from "date-fns";

export interface IPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  created_at: string;
}

interface IPostsProps {
  posts: IPost[];
}

export default function Posts({ posts }: IPostsProps) {
  return (
    <>
      <SEO title="Posts" />

      <main className={styles.container}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <Link href="#">
              <a>
                <time>
                  {formatDistance(Date.parse(post.created_at), Date.now(), {
                    addSuffix: true,
                  })}
                </time>
                <br />
                <strong> {post.title}</strong>
                <p> {post.excerpt} </p>
              </a>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<IPostsProps> = async () => {
  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts = await response.json();
  // const rawData = await prisma.post.findMany();
  // const stringifiedData = safeJsonStringify(rawData);
  // const posts = JSON.parse(stringifiedData);

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 12,
  };
};
