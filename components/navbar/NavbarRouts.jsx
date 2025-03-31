"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarRouts = ({ session, vertical = false }) => {
  const routs = [
    {
      label: "خانه",
      path: "/",
    },
    {
      label: "بلاگ",
      path: "/blog",
    },
  ];
  const path = usePathname();
  return (
    <div className={`flex items-center gap-2 ${vertical ? "flex-col" : ""}`}>
      {routs.map((route, index) => (
        <Link
          key={index}
          href={route.path}
          className={`w-14 py-1 text-center text-lg ${path === route.path ? "rounded-md bg-black text-white" : ""}`}
        >
          {route.label}
        </Link>
      ))}
      {session?.user.userRole === "ADMIN" && (
        <Link
          href="/admin"
          className={`w-14 py-1 text-center text-lg ${path === "/admin" ? "rounded-md bg-black text-white" : ""}`}
        >
          ادمین
        </Link>
      )}
    </div>
  );
};

export default NavbarRouts;
