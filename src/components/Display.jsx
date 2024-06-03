import React, {useRef, useEffect} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayPage from "./DisplayPage";
import DisplayAlbum from "./DisplayAlbum";
import DisplaySongs from "./DisplaySongs";
import { albumsData } from "../assets/assets";

const Display = () => {
  const location = useLocation();
  console.log(location);
  const displayRef = useRef();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const albumColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${albumColor}, #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  });

  return (
    <div ref={displayRef} className="bg-[#121212] flex-1 m-2 px-6 pt-4 rounded-md text-white overflow-auto lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayPage />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/songs/:id" element={<DisplaySongs />} />
      </Routes>
    </div>
  );
};

export default Display;
