import React, { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "./Progress";
import { CurrentSlideData, Data } from "@/pages";
import AudioPlayer from "./AudioPlayer";

type Props = {
  currentSlideData: CurrentSlideData;
  sliderData: Data[];
  data: Data[];
  transitionData: Data;
  handleData: React.Dispatch<React.SetStateAction<Data[]>>;
  handleTransitionData: React.Dispatch<React.SetStateAction<Data>>;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<CurrentSlideData>
  >;
  initData: Data;
};

function Controls({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}: Props) {

  const [playing, setPlaying] = useState<boolean>(false);
  const handlePrev = () => {
    if(!playing) setPlaying(true)
    prevTrack();
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);
    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex(
        (ele) => ele.img === data[data.length - 1].img
      ),
    });
    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev) => prev.slice(1));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.img === data[0].img),
    });
    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
      nextTrack()
    }, 500);
    if(!playing) setPlaying(true)
  };

  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const nextTrack = () => {
    const next = (currentTrack + 1) % sliderData.length;
    setCurrentTrack(next);
  };

  const prevTrack = () => {
    const devide = currentTrack - 1;
    const prev = devide < 0 ? sliderData.length - 1 : devide;
    setCurrentTrack(prev);
  };

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.load(); // Reload new src
  //     audioRef.current.play();
  //   }
  // }, [currentTrack]);


  return (
    <div className="flex items-center gap-2 px-0 py-3 md:px-1 md:py-5">
      <SliderButton handleClick={handlePrev}>
        <IoIosArrowBack className=" text-xl" />
      </SliderButton>
      <SliderButton handleClick={handleNext}>
        <IoIosArrowForward className=" text-xl" />
      </SliderButton>
      <Progress curIndex={currentSlideData.index} length={sliderData.length} />
      <AudioPlayer src={sliderData[currentTrack].song} waveColor={sliderData[currentTrack].waveColor} progressColor={sliderData[currentTrack].progressColor} />
    </div>
  );
}

export default Controls;

const SliderButton = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <button
      className=" flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300
ease-in-out hover:bg-white hover:text-black
"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
