import React from "react";
import { songsData } from "../assets/assets";
import {
  GalleryVertical,
  Maximize2,
  Mic2,
  MonitorSpeaker,
  PictureInPicture2,
  Play,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
  SquarePlay,
  Volume1,
} from "lucide-react";

const Player = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} alt="" />
        <div className="hidden xl:block">
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 14)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <Shuffle className="cursor-pointer" />
          <SkipBack className="cursor-pointer" />
          <Play className="cursor-pointer" />
          <SkipForward className="cursor-pointer" />
          <Repeat2 className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p className="text-sm">1.06</p>
          <div className="w-[60vw] max-w-[500px] bg-white rounded-full cursor-pointer">
            <hr className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p className="text-sm">3.20</p>
        </div>
      </div>
      <div className="hidden opacity-75 items-center gap-2 lg:flex">
        <SquarePlay className="w-5" />
        <Mic2 className="w-5" />
        <GalleryVertical className="w-5" />
        <MonitorSpeaker className="w-5" />
        <Volume1 className="w-5" />
        <input type="range" min={0} max={100} step={1} className=" accent-green-500" />
        <PictureInPicture2 className="w-5" />
        <Maximize2 className="w-5" />
      </div>
    </div>
  );
};

export default Player;
