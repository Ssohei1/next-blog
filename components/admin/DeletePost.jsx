"use client";
import { DeletePostAction } from "@/actions/PostActions";
import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

export const DeletePost = ({ id }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    if (isDeleted) {
      toast.warning("پست حذف شد", {
        className: 'font-bold',
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }, [isDeleted]);
  return (
    <button
      className="cursor-pointer rounded-md bg-gray-100 p-4 shadow-sm hover:bg-gray-200"
      onClick={(e) => {
        e.preventDefault();
        DeletePostAction(id);
        setIsDeleted(true);
      }}
    >
      <Trash className="size-5 text-rose-500" />
    </button>
  );
};
