"use client";
import React from "react";
import SubmitButton from "../ui/SubmitButton";
import { creatUserAction } from "@/actions/AuthActions";
import { signIn } from "next-auth/react";
import { Bounce, toast } from "react-toastify";
const RegisterForm = () => {
  return (
    <form
      action={async (formdata) => {
        const email = formdata.get("email");
        const password = formdata.get("password");
        const res = await creatUserAction(formdata);
        if (res?.success) {
          localStorage.setItem(
            "toastMessage",
            "حساب کاربری با موفقیت ساخته شد.",
          );
          await signIn("credentials", {
            email,
            password,
            callbackUrl: "/",
          });
        } else {
          toast.error("حساب کاربری وجود دارد.", {
            className: "font-bold",
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
      }}
      className="mx-auto flex w-[300px] flex-col gap-y-5 p-3 sm:w-96"
    >
      <h2 className="text-xl font-bold sm:text-3xl">نام نویسی</h2>
      <input
        required
        minLength="3"
        type="text"
        name="name"
        placeholder="نام"
        className="rounded-md border p-2 shadow-sm"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="ایمیل"
        className="rounded-md border p-2 shadow-sm"
      />
      <input
        required
        minLength="4"
        type="password"
        name="password"
        placeholder="رمز عبور"
        className="rounded-md border p-2 shadow-sm"
      />
      <SubmitButton />
    </form>
  );
};

export default RegisterForm;
