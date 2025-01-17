import React from "react";
import Link from "next/link";
import { IoIosGlobe, IoIosHeartEmpty } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import Image from "next/image";

const Navbar = () => {
  return (
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
        <button className="text-white text-shadow">
          <IoIosGlobe size={22} />
        </button>
        <IoIosHeartEmpty size={22} />
        <RiShoppingCartLine size={22} />
      </div>
    </div>
  );
};

export default Navbar;
