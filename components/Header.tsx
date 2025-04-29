import React from "react";
import groovyWalk from "./groovyWalk.gif";
import Image from "next/image";

function Header() {
  return (
    <div className=" absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <div className="  flex items-center gap-2 font-medium tracking-[4px]">
        <Image src={groovyWalk} alt="my gif" height={500} width={500} />
      </div>
    </div>
  );
}

export default Header;