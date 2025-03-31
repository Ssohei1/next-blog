import Container from "@/components/ui/container";
import prismadb from "@/libs/prismadb";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }) => {
  const post = await prismadb.post.findUnique({
    where: {
      address: decodeURI(params.postAddress),
    },
  });
  if (!post) notFound();
  return (
    <div>
      <Container classname="my-10">
        <div className="flex flex-col gap-10">
          <div className="drop-shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={800}
              className="pointer-events-none mx-auto h-full rounded-md object-cover sm:h-[550px]"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-justify text-lg">{post.body}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
