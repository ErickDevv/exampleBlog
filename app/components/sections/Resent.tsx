"use client";

import { Input } from "@nextui-org/input";
import { SearchIcon } from "../Icons/SearchIcon";
import { useEffect, useRef, useState } from "react";

import PostCard from "../PostCard";
import Loading from "./Loading";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const getPosts = async (url?: string) => {
  const res = await fetch(
    url
      ? url
      : `${NEXT_PUBLIC_API_URL}?per_page=9&_fields=id,title,date,jetpack_featured_media_url`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const posts = await res.json();
  return posts;
};

const Resent = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const handleSearch = async (e: any) => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(async () => {
      const posts = await getPosts(
        `${NEXT_PUBLIC_API_URL}?search=${e.target.value}&_fields=id,title,date,jetpack_featured_media_url`
      );
      setPosts(posts);

      console.log(posts);
    }, 600);
  };

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const main = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    main();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center flex-col">
      <Input
        onChange={handleSearch}
        className="px-4 w-full dark"
        color="default"
        type="text"
        label="Buscar"
        placeholder="Buscar en el blog"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />

      <h2 className="text-2xl font-bold text-center">¡Posts destacados!</h2>

      <div className="flex justify-center items-center flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {posts.length === 0 && <Loading />}
    </div>
  );
};

export default Resent;
