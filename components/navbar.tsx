// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import Image from "next/image";
import Language from "./language/page"; // If you have a language component

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-row justify-between pt-6 ml-[12%] mr-[12%]">
        <div>
          <Image src={"/attire-logo.png"} alt="logo" width={60} height={60} />
        </div>
        <div className="text-white text-shadow">
          <ul className="flex flex-row justify-center items-center gap-16 text-lg font-bold">
            <li>
              <Link href="/">WOMEN</Link>
            </li>
            <li>
              <Link href="/men">MEN</Link>
            </li>
            <li>
              <Link href="/kids">KIDS</Link>
            </li>
            <li>
              <Link href="/baby">BABY</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-row items-center gap-7 text-white text-shadow ">
            <Language />
            <IoIosHeartEmpty size={22} className="hover:text-gray-600" />
            <RiShoppingCartLine size={22} className="hover:text-gray-600" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center pb-8 gap-48 text-shadow">
        <button className="bg-white w-12 h-12 flex items-center justify-center rounded-full">
          <GoHomeFill size={25} />
        </button>
        <button className="bg-white w-16 h-16 flex items-center justify-center rounded-full">
          <IoIosSearch size={30} />
        </button>
        <button className="bg-white w-12 h-12 flex items-center justify-center rounded-full">
          <FiUser size={25} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
