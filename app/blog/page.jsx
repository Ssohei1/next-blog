import Container from "@/components/ui/container";
import prismadb from "@/libs/prismadb";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getFirstWords = (input, numwords) => {
  const words = input.split(" ");
  const firstWords = words.slice(0, numwords);
  return firstWords.join(" ");
};
const page = async () => {
  const posts = await prismadb.post.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return (
    <div className="md:px-3, mx-auto max-w-7xl px-5 h-full my-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              className="flex flex-col justify-between gap-y-2 rounded-md border border-gray-200 sm:shadow-lg sm:transition sm:duration-500 sm:ease-out sm:hover:scale-105 sm:hover:shadow-2xl"
              href={`/blog/${post.address}`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-md sm:rounded-t-md sm:rounded-b-none">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={1000}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-3">
                  <h2 className="font-bold">{post.title}</h2>
                  <p className="mt-1 text-gray-600">
                    {getFirstWords(post.body, 10)} ...
                  </p>
                </div>
                <div className="flex items-center justify-center gap-x-2 rounded-full bg-gray-200 px-3 py-2 sm:hidden">
                  <p className="text-xs">ادامه مطلب</p>
                  <MoveLeft className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default page;
