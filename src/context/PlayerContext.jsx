import { createContext, useRef, useState, useEffect, useCallback } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBar = useRef();
  const backRef = useRef(null);
  const nextRef = useRef(null);

  const [volume, setVolume] = useState(60);
  const [track, setTrack] = useState(songsData[0]);
  const [playerStatus, setPlayerStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      seconds: 0,
      minutes: 0,
    },
    totalTime: { seconds: 0, minutes: 0 },
  });

  const play = () => {
    audioRef.current.play();
    setPlayerStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayerStatus(false);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
  };

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
  };

  const playPrevious = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
    } else {
      backRef.current.classList.add("not-allowed");
    }
  };

  const playNext = useCallback(async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
    } else {
      nextRef.current.classList.add("not-allowed");
    }
  }, [track.id]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      setTime({
        currentTime: {
          seconds: Math.floor(audioRef.current.currentTime % 60),
          minutes: Math.floor(audioRef.current.currentTime / 60),
        },
        totalTime: {
          seconds: Math.floor(audioRef.current.duration % 60),
          minutes: Math.floor(audioRef.current.duration / 60),
        },
      });

      if (seekBar.current) {
        seekBar.current.value =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
      }
    };

    const handleEnded = () => {
      playNext();
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("ended", handleEnded);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, [audioRef, playNext]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      setTime((prevTime) => ({
        ...prevTime,
        totalTime: {
          seconds: Math.floor(audioRef.current.duration % 60),
          minutes: Math.floor(audioRef.current.duration / 60),
        },
      }));
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [track]);

  useEffect(() => {
    if (track) {
      audioRef.current.load();
      audioRef.current.play();
      setPlayerStatus(true);
    }
  }, [track]);

  const contextValue = {
    audioRef,
    seekBar,
    track,
    setTrack,
    playerStatus,
    setPlayerStatus,
    time,
    setTime,
    play,
    pause,
    handleSeek,
    playWithId,
    backRef,
    playPrevious,
    playNext,
    nextRef,
    skipForward,
    skipBackward,
    volume,
    setVolume,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
