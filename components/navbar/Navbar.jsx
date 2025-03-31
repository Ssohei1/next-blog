import { getServerSession } from "next-auth";
import Container from "../ui/container";
import { authOption } from "@/libs/next-auth";
import UserAvatar from "./user-avatar/UserAvatar";
import NavbarRouts from "./NavbarRouts";
import NavbarMobile from "./NavbarMobile";
import Image from "next/image";
const Navbar = async () => {
  const session = await getServerSession(authOption);
  return (
    <nav className="border-b border-gray-200 py-4">
      {/* <Container isFullHeight classname='flex justify-between items-center'> */}
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-3">
        {/* right */}
        <div className="hidden items-center gap-6 md:flex">
          <Image
            className="size-10"
            src="/blog.png"
            alt="logo"
            width={1200}
            height={1000}
          />
          <NavbarRouts session={session} />
        </div>
        <div className="block md:hidden">
          <NavbarMobile session={session} />
        </div>
        {/* left */}
        <div className="">
          <UserAvatar session={session} />
        </div>
      </div>
      {/* </Container> */}
    </nav>
  );
};

export default Navbar;
