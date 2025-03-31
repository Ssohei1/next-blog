import prismadb from "@/libs/prismadb";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DeletePost } from "./DeletePost";
import Image from "next/image";

const AdminPostList = async () => {
  const posts = await prismadb.post.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return (
    <div>
      <div className="space-y-4">
        {posts.map((post) => (
          <div className="flex gap-2" key={post.id}>
            <div className="flex flex-1 items-start gap-4 rounded-md bg-gray-100 px-3 py-4 shadow-sm">
              <div className="">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={1000}
                  className="w-[200px] rounded-md object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">{post.title}</h3>
            </div>
            <div className="flex flex-col gap-3">
              <DeletePost id={post.id} />
              <Link
                href={`/blog/${post.address}`}
                className="mx-auto rounded-md bg-gray-100 p-4 text-blue-400 shadow-sm hover:bg-gray-200"
              >
                <ExternalLink className="size-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPostList;
