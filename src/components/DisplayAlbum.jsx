import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/assets";
import SpotifyLogo from "../../public/spotify-icon.svg";
import { Clock } from "lucide-react";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  console.log(albumData);

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-10 gap-8 md:flex-row md:items-end">
        <img className="w-48 rounded-lg" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-6xl xl:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1 space-x-2 text-sm lg:text-base">
            <img src={SpotifyLogo} alt="" className="w-6 inline-block" />
            <b>Spotify</b>
            .1,343,457,344 likes.
            <b>50 songs, </b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="text-sm">
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
            className="grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 items-center hover:bg-[#ffffff2b] cursor-pointer rounded-lg overflow-auto"
            key={index}
          >
            <p className="flex gap-3 md:items-center">
              <p className="text-[#a7a7a7]">{index + 1}</p>
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <img src={item.image} alt={item.name} className="w-12" />
                <p>{item.name}</p>
              </div>
            </p>
            <p>{albumData.name}</p>
            <p className="hidden sm:block">5 days ago</p>
            <p className="m-auto">{item.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayAlbum;
