import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const page = () => {
  return (
    <div className="mb-16">
      <Container classname="pt-8 md:py-4">
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="">
            <div className="flex flex-col items-center gap-y-7 md:items-start">
              <h1 className="text-5xl font-bold md:text-6xl">نکست بلاگ</h1>
              <p className="text-center text-lg text-balance md:text-right md:text-xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
              <Link
                href="/blog"
                className="rounded-md bg-black px-7 py-3 text-xl font-bold text-white hover:bg-gray-600"
              >
                بلاگ
              </Link>
            </div>
          </div>
          <div className="">
            <div className="w-[300px] sm:w-sm md:w-md lg:w-lg">
              <Image
                src="/hero-image.png"
                alt="hero"
                className=""
                width={1200}
                height={1000}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
