import React from "react";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";

function Header() {
  return (
    <div className=" absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <div className="  flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className=" text-xl" />
        Album For You
      </div>
      <ul className=" flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
        <div className=" flex items-center gap-6">
          <IoMdSearch className=" text-lg" />
          <IoMdPerson className=" text-lg" />
        </div>
      </ul>
    </div>
  );
}

export default Header;