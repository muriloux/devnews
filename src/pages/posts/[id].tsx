import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { IPost } from ".";

interface IComment {
  id: string;
  body: string;
}

interface ICommentProps {
  comments: IComment[];
}

export default function Post({ comments }: ICommentProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Post {router.query.id}</h1>
      <p>{router.asPath}</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const response = await fetch("http://localhost:3333/posts");
  // const posts: IPost[] = await response.json();

  // const paths = posts.map((post) => {
  //   return {
  //     params: { id: String(post.id) },
  //   };
  // });

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ICommentProps> = async (
  context
) => {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3333/comments?postId=${id}`);
  const comments = await response.json();
  return {
    props: {
      comments,
    },
    revalidate: 5,
  };
};
