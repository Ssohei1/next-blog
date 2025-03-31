"use client";
import { signOut } from "next-auth/react";

const User = ({ name }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="rounded-md border py-1">
        <span className="p-3 text-2xl font-bold">{name}</span>
      </div>
      <button
        className="rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800"
        onClick={(e) => {
          e.preventDefault();
          signOut({
            callbackUrl: "/",
          });
        }}
      >
        خروج
      </button>
    </div>
  );
};

export default User;
