import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { formatDistance } from "date-fns";

import { SEO } from "../../components/SEO";
import { IPost } from ".";
import styles from "./post.module.scss";

export default function Post({ post }) {
  const p = post as IPost;
  const router = useRouter();
  console.log(post);

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <SEO title="Post" />

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{p.title}</h1>
          <time>
            {formatDistance(Date.parse(p.created_at), Date.now(), {
              addSuffix: true,
            })}
          </time>
          <div className={styles.content}>{p.content}</div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const response = await fetch(`${process.env.API_URL}/posts/${slug}`);
  const post = await response.json();

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 12,
  };
};
