import { GetStaticProps } from "next";

export interface IPost {
  id: string;
  title: string;
}

interface IPostsProps {
  posts: IPost[];
}

export default function Posts({ posts }: IPostsProps) {
  return (
    <>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps<IPostsProps> = async () => {
  const response = await fetch("http://localhost:3333/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 5,
  };
};
