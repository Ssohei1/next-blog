"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import NavbarRouts from "./NavbarRouts";
import Image from "next/image";

const NavbarMobile = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Menu onClick={toggleOpen} className="size-8 cursor-pointer" />
      {isOpen &&
        createPortal(
          <div className="fixed top-0 flex h-full w-full flex-col gap-y-4 bg-gray-100 p-5 ring-0">
            <div className="flex items-center justify-between">
              <Image
                src="/blog.png"
                alt="logo"
                className="size-10"
                width={1200}
                height={1000}
              />
              <div className="rounded-md hover:bg-gray-200">
                <X className="size-6 cursor-pointer" onClick={toggleOpen} />
              </div>
            </div>
            <div className="border-b border-gray-200"></div>
            <div className="flex w-fit" onClick={toggleOpen}>
              <NavbarRouts session={session} vertical />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default NavbarMobile;
