import React from "react";
import Container from "../ui/container";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const socialIcons = [
    {
      label: "instagram",
      logo: "/instagram.png",
      size: "size-8",
      href: "https://instagram.com",
    },
    {
      label: "telegram",
      logo: "/telegram.png",
      size: "size-8",
      href: "https://telegram.org",
    },
    {
      label: "x",
      logo: "/x.png",
      size: "size-6",
      href: "https://twitter.com",
    },
    {
      label: "youtube",
      logo: "/youtube.png",
      size: "size-10",
      href: "https://youtube.com",
    },
  ];
  return (
    <footer className="border-t bg-gray-800">
      <Container>
        <div className="flex flex-col justify-between gap-y-8 py-8 text-white md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <Image
                src='/blog.png'
                alt="logo"
                className="size-8 invert"
                width={1200}
                height={1000}
              />
              <h2 className="text-3xl font-bold">نکست بلاگ</h2>
            </div>
            <p className="text-center text-balance text-gray-300 sm:w-96 md:text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-4 md:items-end">
            <div className="flex items-center gap-4">
              {socialIcons.map((icon, index) => (
                <Link href={icon.href} key={index} className={icon.size}>
                  <Image
                    src={icon.logo}
                    alt={icon.label}
                    width={1200}
                    height={1000}
                    className="opacity-50 invert hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
            <p className="text-gray-500">
              Copyright &copy; | All Rights Reserved
            </p>
            <Link
              href="https://github.com/Ssohei1"
              className="text-gray-500 hover:text-gray-200"
            >
              By Soheil Ahmadi
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
