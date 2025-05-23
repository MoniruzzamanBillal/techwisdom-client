"use client";

import Link from "next/link";
import Wrapper from "./Wrapper";

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

import { useState } from "react";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/user.provider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";

const Links = [
  { name: "Home", link: "/" },
  { name: "Create Post", link: "/create-post" },
  { name: "About us", link: "/About-us" },
  { name: "Contact us", link: "/contact-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { user, handleSetUser, handleSetToken } = useUserContext();

  // console.log(user);

  // ! logout function
  const handleLogout = () => {
    handleSetUser(null);
    handleSetToken(null);
    toast.success("User logged out successfully !!");
    router.push("/");
  };

  return (
    <div
      className="  shadow-md w-full fixed top-0 left-0 z-10 print:hidden   "
      style={{
        backdropFilter: "blur(8px)",
      }}
    >
      <Wrapper className="   flex items-center justify-between py-2  m-auto   ">
        {/* logo section */}
        <div className="imgContainer  ">
          <Link href={"/"}>
            <div className=" text-2xl cursor-pointer flex items-center  gap-x-1">
              <Image
                src={"https://i.postimg.cc/Qt3gytGP/logo.png"}
                className="  w-[3rem] sm:w-[3.6rem] md:w-[2.8rem] lg:w-[4rem]  "
                alt="logo"
                height={700}
                width={700}
              />

              <p className=" text-xl xsm:text-2xl  md:text-xl lg:text-3xl font-bold font-headingFont text-prime50 ">
                Tech <span className="   text-prime100 ">Wisdom</span>{" "}
              </p>
            </div>
          </Link>
        </div>

        {/* right link section  */}
        <div className="rightLinkSection  flex items-center gap-x-4 md:gap-x-0  ">
          {/* button section  */}
          <div className="buttonSection order-1 md:order-2  md:ml-5 lg:ml-8  flex  items-center gap-x-0.5  ">
            {!user ? (
              <Link href={"/login"}>
                <Button className=" -z-[1] text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 ">
                  Sign in
                </Button>
              </Link>
            ) : (
              <div className="relative   ">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer  border border-gray-500 ">
                      <AvatarImage src={user?.profilePicture} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-black50 text-white ">
                    <DropdownMenuGroup>
                      <Link
                        href={` ${
                          user?.userRole === "user" ? "/profile" : "/admin"
                        } `}
                      >
                        <DropdownMenuItem>
                          <span>Dashboard</span>
                          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => handleLogout()}>
                        <span>Log out </span>
                        <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/*  */}
                {/*  */}
                {/*  */}
              </div>
            )}

            {/*  */}
            {/*  */}
          </div>
          {/* button section ends  */}

          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className=" order-2 md:order-1 flex justify-center items-center   cursor-pointer md:hidden  font-bold  text-2xl text-prime50 "
          >
            {open ? <RiCloseFill className="   " /> : <RiMenu3Fill />}
          </div>

          {/* linke items */}
          <ul
            className={` absolute bg-black20 shadow-md md:shadow-none z-[-1] left-0 w-full pl-10 md:flex md:items-center  pb-8 md:pb-0   md:static md:bg-transparent  md:z-auto   md:w-auto md:pl-0  transition-all duration-300 ease-in text-sm sm:text-base md:text-xs xmd:text-sm lg:text-base  ${
              open ? "top-[3.9rem] block" : "top-[-490px]"
            }  `}
            style={{
              backdropFilter: "blur(8px)",
            }}
          >
            {Links &&
              Links.map((link, index) => (
                <li
                  key={index}
                  className="  my-5 xsm:my-7 md:ml-8 md:my-0  font-semibold uppercase"
                >
                  <Link
                    href={link.link}
                    className=" text-white hover:text-prime50 duration-500  "
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
          </ul>
          {/* link items ends  */}
        </div>
        {/* right link section ends  */}

        {/*  */}
      </Wrapper>
    </div>
  );
};

export default Navbar;
