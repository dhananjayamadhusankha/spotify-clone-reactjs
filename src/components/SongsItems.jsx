import React from "react";
import { useNavigate } from "react-router-dom";

const SongsItems = ({ id, name, image, desc }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/songs/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded-lg cursor-pointer hover:bg-[#ffffff26] w-fit"
    >
      <img className="rounded-lg" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongsItems;
