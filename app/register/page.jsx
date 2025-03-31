import RegisterForm from "@/components/auth/RegisterForm";
import Container from "@/components/ui/container";
import { authOption } from "@/libs/next-auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const register = async () => {
  const session = await getServerSession(authOption);
  if (session?.user.userId) redirect("/");

  return (
    <div className="my-20">
      <Container>
        <RegisterForm />
        <div className="mt-8">
          <Link href="/login" className="hover:text-blue-600">
            <p className="text-center">حساب کاربری دارید؟ورود</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default register;
