import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="  pt-6 print:hidden">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <p className=" text-prime50 text-center pb-3 font-semibold text-xl xsm:text-2xl  xmd:text-3xl " >Tech Wisdom </p>
        <div className="flex flex-col items-center border-t border-gray-600 pt-3 ">
          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link
              href={"/About-us"}
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              About Us
            </Link>
            <Link
              href={"/create-post"}
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
           Create post 
            </Link>
           
            <Link
              href={"/contact-us"}
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Contact us
            </Link>
          </nav>

          <div className="flex ">
            {/* facebook icon  */}
            <Link
              href={"https://www.facebook.com/boss.mesut/"}
              target="_blank"
              className="mr-6 text-2xl text-neutral-600 hover:text-blue-700"
            >
              <FaFacebook />
            </Link>

            {/* linkedin icon  */}
            <Link
              href={"https://bd.linkedin.com/"}
              target="_blank"
              className="mr-6 text-2xl text-neutral-600 hover:text-blue-800"
            >
              <FaLinkedin />
            </Link>
            {/* github icon  */}
            <Link
              href={"https://github.com/MoniruzzamanBillal"}
              target="_blank"
              className="mr-6 text-2xl text-neutral-600 hover:text-neutral-800"
            >
              <FaGithub />
            </Link>
          </div>
        </div>

        <div className="py-8 text-center text-sm text-gray-400">
          © 2024 All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
