import LoginForm from "@/components/auth/LoginForm";
import { authOption } from "@/libs/next-auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOption);
  console.log(session);

  if (session?.user.userId) redirect("/");
  return (
    <div className="my-20">
      <LoginForm />
      <div className="mt-8">
        <Link href="/register" className="hover:text-blue-600">
          <p className="text-center">برای عضویت کلیک کنید</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
