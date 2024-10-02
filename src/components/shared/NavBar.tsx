"use client";

import Link from "next/link";
import Wrapper from "./Wrapper";

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

import { LuUser2 } from "react-icons/lu";
import { useState } from "react";
import { Button } from "../ui/button";

const Links = [
  { name: "Home", link: "/" },
  { name: "Create Post", link: "/create-post" },
  { name: "Booking", link: "/booking-car-list" },
  { name: "About us", link: "/about-us" },
  { name: "Contact", link: "/contact-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="  shadow-md w-full fixed top-0 left-0 z-10 "
      style={{
        backdropFilter: "blur(8px)",
      }}
    >
      <Wrapper className="   flex items-center justify-between py-2  m-auto   ">
        {/* logo section */}
        <div className="imgContainer  ">
          <Link href={"/"}>
            <div className=" text-2xl cursor-pointer flex items-center  gap-x-1">
              <img
                src={"https://i.postimg.cc/Qt3gytGP/logo.png"}
                className="  w-[3rem] sm:w-[3.6rem] md:w-[2.8rem] lg:w-[4rem]  "
                alt="logo"
              />

              <p className="  text-2xl sm:text-2xl md:text-xl lg:text-3xl font-bold font-headingFont text-prime50 ">
                Tech <span className="   text-prime100 ">Wisdom</span>{" "}
              </p>
            </div>
          </Link>
        </div>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="   flex justify-center items-center   cursor-pointer md:hidden  font-semibold  text-2xl text-prime50 "
        >
          {open ? <RiCloseFill className="   " /> : <RiMenu3Fill />}
        </div>

        {/* linke items */}
        <ul
          className={` absolute bg-black20 shadow-md md:shadow-none z-[-1] left-0 w-full pl-10 md:flex md:items-center  pb-8 md:pb-0   md:static md:bg-transparent  md:z-auto   md:w-auto md:pl-0  transition-all duration-300 ease-in text-xs xsm:text-sm sm:text-base md:text-xs xmd:text-sm lg:text-base  ${
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

          <div className="buttonSection  md:ml-5 lg:ml-8  flex  items-center gap-x-0.5  ">
            {/* {!userInfo ? (
                <Link href={"/login"}>
                  <Button className=" -z-[1] text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 ">
                    Sign in
                  </Button>
                </Link>
              ) : (
                <div className="relative">
                  <Link
                    to="/dashboard"
                    className="inline-block p-2 rounded-full bg-orange-100 cursor-pointe"
                  >
                    <LuUser2 className=" text-2xl font-bold text-gray-800 " />
                  </Link>
                </div>
              )} */}

            <Link href={"/login"}>
              <Button
                onClick={() => setOpen(false)}
                className=" -z-[1] text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 "
              >
                Sign in
              </Button>
            </Link>

            {/*  */}
            {/*  */}
            {/*  */}

            {/*  */}
            {/*  */}
          </div>
        </ul>
      </Wrapper>
    </div>
  );
};

export default Navbar;
