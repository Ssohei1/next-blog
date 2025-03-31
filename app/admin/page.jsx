import AdminPostList from "@/components/admin/AdminPostList";
import NewPostForm from "@/components/admin/NewPostForm";
import Container from "@/components/ui/container";
import { authOption } from "@/libs/next-auth";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOption);
  if (!session || session?.user.userRole != "ADMIN")
    return (
      <div className="mx-auto mt-20 text-xl text-red-700">دسترسی غیر مجاز</div>
    );
  return (
    <div className="mb-7">
      <Container classname="flex flex-col md:flex-row mt-8 ">
        <div className="w-full px-4 py-2">
          <NewPostForm />
        </div>
        <div className="my-5 block border-b shadow-md md:hidden"></div>
        <div className="w-full px-4 py-2 md:h-96 md:overflow-y-auto">
          <AdminPostList />
        </div>
      </Container>
    </div>
  );
};
export default page;
