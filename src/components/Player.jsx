import React, { useContext } from "react";
import {
  FastForward,
  GalleryVertical,
  Maximize2,
  Mic2,
  MonitorSpeaker,
  Pause,
  PictureInPicture2,
  Play,
  SkipBack,
  SkipForward,
  SquarePlay,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekBar,
    handleSeek,
    play,
    pause,
    playerStatus,
    time,
    backRef,
    playPrevious,
    nextRef,
    playNext,
    skipForward,
    skipBackward,
    volume,
    setVolume,
  } = useContext(PlayerContext);

  const formatTime = (minutes, seconds) => {
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const getVolumeIcon = (volume) => {
    if (volume <= 0) {
      return <VolumeX className="w-6" />;
    } else if (volume >= 1 && volume <= 20) {
      return <Volume className="w-6" />;
    } else if (volume > 20 && volume <= 60) {
      return <Volume1 className="w-6" />;
    } else {
      return <Volume2 className="w-6" />;
    }
  };

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
          <FastForward
            onClick={skipBackward}
            className="cursor-pointer rotate-180"
            fill="white"
          />
          <SkipBack
            ref={backRef}
            onClick={playPrevious}
            className="cursor-pointer"
            fill="white"
          />
          {playerStatus ? (
            <Pause onClick={pause} className="cursor-pointer" fill="white" />
          ) : (
            <Play onClick={play} className="cursor-pointer" fill="white" />
          )}
          <SkipForward
            ref={nextRef}
            onClick={playNext}
            className="cursor-pointer"
            fill="white"
          />
          <FastForward
            onClick={skipForward}
            className="cursor-pointer"
            fill="white"
          />
        </div>
        <div className="flex items-center gap-5 w-full">
          <span className="text-sm">
            {formatTime(time.currentTime.minutes, time.currentTime.seconds)}
          </span>
          <input
            type="range"
            ref={seekBar}
            defaultValue={0}
            className="flex-grow accent-white hover:accent-green-400"
            onChange={handleSeek}
          />
          <span className="text-sm">
            {formatTime(time.totalTime.minutes, time.totalTime.seconds)}
          </span>
        </div>
      </div>
      <div className="flex opacity-75 items-center gap-2 pt-8 ">
        {/* <SquarePlay className="w-5 hidden lg:flex" />
        <Mic2 className="w-5 hidden lg:flex" />
        <GalleryVertical className="w-5 hidden lg:flex" />
        <MonitorSpeaker className="w-5 hidden lg:flex" /> */}
        {getVolumeIcon(volume)}
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={volume}
          defaultValue={0}
          onChange={(e) => setVolume(e.target.value)}
          className="accent-white hover:accent-green-400 w-20 sm:w-24 lg:w-36"
        />
        <span className="text-sm">{volume}</span>
        {/* <PictureInPicture2 className="w-5 hidden lg:flex" />
        <Maximize2 className="w-5 hidden lg:flex" /> */}
      </div>
    </div>
  );
};

export default Player;
