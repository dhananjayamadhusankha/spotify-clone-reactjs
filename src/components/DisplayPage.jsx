import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import Albemitems from "./Albemitems";
import SongsItems from "./SongsItems";

const DisplayPage = () => {
  return (
    <>
      <Navbar />
      <div className="my-4">
        <h1 className="font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Albemitems
              key={index}
              id={item.id}
              image={item.image}
              desc={item.desc}
              name={item.name}
            />
          ))}
        </div>
        <h1 className="font-bold text-2xl">Today's Big Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongsItems
              key={index}
              id={item.id}
              image={item.image}
              desc={item.desc}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayPage;
