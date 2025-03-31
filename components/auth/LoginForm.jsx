"use client";
import React from "react";
import SubmitButton from "../ui/SubmitButton";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { checkUserEmail } from "@/actions/AuthActions";
import { Bounce, toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  return (
    <form
      action={async (formdata) => {
        const email = formdata.get("email");
        const password = formdata.get("password");
        const res = await checkUserEmail(formdata);

        if (!res?.success) {
          toast.error("کاربری با این ایمیل یافت نشد", {
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
          redirect("/register");
        }
        const sigInResponse = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        if (sigInResponse.error) {
          toast.error("ایمیل یا رمزعبور اشتباه است.", {
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
        } else {
          localStorage.setItem("toastMessage", "ورود موفقیت آمیز.");
          router.push("/");
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
        // else {
        // signIn("credentials", {
        //   email,
        //   password,
        //   callbackUrl: "/",
        // });
        //   alert("sign in");
        // }
      }}
      className="mx-auto flex w-[300px] flex-col gap-y-5 p-3 sm:w-96"
    >
      <h2 className="text-xl font-bold sm:text-3xl">ورود</h2>
      <input
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

export default LoginForm;
