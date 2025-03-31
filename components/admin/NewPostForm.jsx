"use client";
import React, { useEffect, useRef, useState } from "react";
import SubmitButton from "../ui/SubmitButton";
import { CreatePostAction } from "@/actions/PostActions";
import { Bounce, toast } from "react-toastify";

const NewPostForm = () => {
  const formRef = useRef(null);
  const [isCopy, setIsCopy] = useState(false);
  useEffect(() => {
    if (isCopy) {
      toast.info("لینک عکس کپی شد", {
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
  }, [isCopy]);
  const handleSubmit = async (formdata) => {
    const res = await CreatePostAction(formdata);
    if (res.success) {
      toast.success("پست جدید ساخته شد.", {
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
      formRef?.current.reset();

    } else {
      toast.success("خطا در ایجاد پست!", {
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
  };
  return (
    <form
      action={handleSubmit}
      ref={formRef}
      className="space-y-6"
      // action={async (formdata) => {
      //   formRef?.current.reset();
      //   console.log(formdata);
      //   await CreatePostAction(formdata);
      // }}
    >
      <div className="flex flex-col gap-y-1">
        <label>عنوان</label>
        <input
          required
          type="text"
          name="title"
          className="rounded-md border border-gray-400 p-2 shadow-sm"
          placeholder="پست جدید"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label>توضیحات</label>
        <textarea
          required
          rows={5}
          name="body"
          className="rounded-md border border-gray-400 p-2 shadow-sm"
          placeholder="شرح پست"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label>تصویر</label>
        <input
          required
          type="text"
          name="image"
          className="rounded-md border border-gray-400 p-2 shadow-sm"
          placeholder="آدرس تصویر"
        />
        <span
          className="cursor-pointer text-gray-400 mt-1 text-sm sm:text-base"
          onClick={(e) => {
            navigator.clipboard.writeText(e.target.innerText),
              setIsCopy(!isCopy);
          }}
        >
          https://blog-img.storage.c2.liara.space/post1.jpg
        </span>
      </div>
      <SubmitButton />
    </form>
  );
};

export default NewPostForm;
