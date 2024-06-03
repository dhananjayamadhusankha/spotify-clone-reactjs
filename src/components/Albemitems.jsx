import React from "react";
import { useNavigate } from "react-router-dom";

const Albemitems = ({ id, name, image, desc }) => {
  // console.log("id>>>", id)
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded-lg cursor-pointer hover:bg-[#ffffff26] w-fit"
    >
      <img className="rounded-lg" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default Albemitems;
