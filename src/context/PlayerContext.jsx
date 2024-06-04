import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  // console.log("props>>>>>>>>", props);

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
    await audioRef.current.play();
    setPlayerStatus(true);
  };

  const playPrevious = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      // backRef.current.classList.add("allowed");
      setPlayerStatus(true);
    } else {
      backRef.current.classList.add("not-allowed");
    }
  };

  const playNext = async () => {
    console.log(track.id);
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      // nextRef.current.classList.add("allowed");
      setPlayerStatus(true);
    } else {
      nextRef.current.classList.add("not-allowed");
    }
  };

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
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
    }, 1000);
  }, [audioRef]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

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
