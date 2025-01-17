import React from "react";
import Link from "next/link";
import { IoIosGlobe, IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-row justify-between pt-4 text-white text-shadow ml-[8%] mr-[8%]">
        <div>
          <Image src={"/attire-logo.png"} alt="logo" width={60} height={60} />
        </div>
        <div className="">
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
        <div className="flex flex-row justify-center items-center gap-7 text-white text-shadow">
          <IoIosGlobe size={22} />
          <IoIosHeartEmpty size={22} />
          <RiShoppingCartLine size={22} />
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
