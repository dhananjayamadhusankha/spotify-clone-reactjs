import React, { useContext } from "react";
import {
  GalleryVertical,
  Maximize2,
  Mic2,
  MonitorSpeaker,
  Pause,
  PictureInPicture2,
  Play,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
  SquarePlay,
  Volume1,
} from "lucide-react";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { track, seekBar, handleSeek, play, pause, playerStatus, time } =
    useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div className="hidden xl:block">
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 14)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto w-full max-w-2xl px-4">
        <div className="flex gap-4">
          <Shuffle className="cursor-pointer" />
          <SkipBack className="cursor-pointer" fill="white" />
          {playerStatus ? (
            <Pause onClick={pause} className="cursor-pointer" fill="white" />
          ) : (
            <Play onClick={play} className="cursor-pointer" fill="white" />
          )}
          <SkipForward className="cursor-pointer" fill="white" />
          <Repeat2 className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-5 w-full">
          <span className="text-sm">{time.currentTime.minutes}:{time.currentTime.seconds}</span>
          {/* <div
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-white rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div> */}
          <input type="range" ref={seekBar} className=" flex-grow accent-[#1ed760]" onChange={handleSeek} />
          <span className="text-sm">{time.totalTime.minutes}:{time.totalTime.seconds}</span>
        </div>
      </div>
      <div className="hidden opacity-75 items-center gap-2 lg:flex">
        <SquarePlay className="w-5" />
        <Mic2 className="w-5" />
        <GalleryVertical className="w-5" />
        <MonitorSpeaker className="w-5" />
        <Volume1 className="w-5" />
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          className="accent-[#1ed760]"
        />
        <PictureInPicture2 className="w-5" />
        <Maximize2 className="w-5" />
      </div>
    </div>
  );
};

export default Player;
