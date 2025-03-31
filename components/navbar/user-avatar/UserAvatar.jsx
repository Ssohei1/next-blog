import prismadb from "@/libs/prismadb";
import Link from "next/link";
import React from "react";
import User from "./User";

const UserAvatar = async ({ session }) => {
  if (!session || !session.user.userId)
    return (
      <div>
        <Link
          href="/login"
          className="rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800"
        >
          ورود / ثبت نام
        </Link>
      </div>
    );
  const user = await prismadb.user.findUnique({
    where: {
      id: session.user.userId,
    },
  });
  return <User name={user?.name} />;
};

export default UserAvatar;
