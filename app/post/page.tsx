"use client";

import { useEffect, useState, Suspense } from "react";
import "./postPage.css";
import Loading from "../components/sections/Loading";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const PostContent = () => {
  const searchParams = useSearchParams();
  const [post, setPost] = useState<any>(null);
  const Router = useRouter();

  const getPost = async (id: string) => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const main = async () => {
      const id = searchParams.get("id");
      if (!id) {
        Router.push("/");
      } else {
        const p = await getPost(id);
        setPost(p);
      }
    };

    main();
  }, [searchParams]);

  return (
    <div className="">
      {post ? (
        <div className="p-4">
          <h1>{post.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

const Post = () => (
  <Suspense fallback={<Loading />}>
    <PostContent />
  </Suspense>
);

export default Post;
