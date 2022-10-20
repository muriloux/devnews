import { GetServerSideProps } from "next";
// import { useEffect, useState } from "react";
import { SEO } from "../components/SEO";

interface IPost {
  id: string;
  title: string;
}

interface IHomeProps {
  posts: IPost[];
}

export default function Home({ posts }: IHomeProps) {
  // const [posts, setPosts] = useState<IPost[]>([]);

  // useEffect(() => {
  //  fetch("http://localhost:3333/posts").then((response) => {
  //    response.json().then((data) => {
  //    setPosts(data);
  //   });
  //  });
  // }, []);

  return (
    <>
      <SEO />
      <h1>Posts</h1>
      <ul>
        {posts.map((post: IPost) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};
