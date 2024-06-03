import { useParams } from "react-router-dom";
import { songsData } from "../assets/assets";
import Navbar from "./Navbar";
import SpotifyLogo from "../../public/spotify-icon.svg";
import { Clock } from "lucide-react";

const DisplaySongs = () => {
  const { id } = useParams();
  const songData = songsData[id];
  console.log(songData);

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-10 gap-8 md:flex-row md:items-end">
        <img className="w-48 rounded-lg" src={songData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-6xl xl:text-7xl">
            {songData.name}
          </h2>
          <h4>{songData.desc}</h4>
          <p className="mt-1 space-x-2 text-sm lg:text-base">
            <img src={SpotifyLogo} alt="" className="w-6 inline-block" />
            <b>Spotify</b>
            .1,343,457,344 likes.
            <b>50 songs, </b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          #<b>Title</b>
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <Clock className="m-auto" />
      </div>
      <hr className="border-[#a7a7a7] mb-2" />
      {songsData.map((item, index) => (
        <div
          className="grid grid-cols-3 sm:grid-cols-4 p-2 items-center hover:bg-[#ffffff2b] cursor-pointer rounded-lg overflow-auto"
          key={index}
        >
          <p className="flex gap-2 items-center">
            <p className="text-[#a7a7a7]">{index + 1}</p>
            <img src={item.image} alt={item.name} className="w-12" />
            <p>{item.name}</p>
          </p>
          <p>{songData.name}</p>
          <p className="hidden sm:block">5 days ago</p>
          <p className="m-auto">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplaySongs;
