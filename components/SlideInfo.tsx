
import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import catWalk from "./catWalk.gif";
import { Data, CurrentSlideData } from "@/pages";
import Image from "next/image";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white" />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className=" mt-5 flex items-center gap-3">
        <button
          className="flex h-[41px] w-[41px] items-center justify-center rounded-full text-xs transition 
            duration-300 ease-in-out hover:opacity-80 "
        >
          <Image src={catWalk} alt="my gif" height={100} width={100} />
        </button>
      </motion.div>
    </>
  );
}

export default SlideInfo;
