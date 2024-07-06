"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Image as ImageUI,
} from "@nextui-org/react";

import { Input } from "@nextui-org/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";


interface Post {
  id: number;
  title: { rendered: string };
  jetpack_featured_media_url: string;
}

export default function PostCard({ post }: { post: Post }) {

  const Router = useRouter();

  return (
    <Card
      onClick={() => {
       Router.push("/post?id=" + post.id);
      }}
      isPressable
      className="py-4 max-w-[270px] w-full bg-[#1b1b1b] text-white border-2 border-[#1b1b1b] hover:border-[#ffffff] transition-colors duration-300 ease-in-out"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{post.title.rendered}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <ImageUI
          isZoomed
          alt="Card background"
          className="object-cover rounded-xl h-[150px]"
          src={post.jetpack_featured_media_url}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
