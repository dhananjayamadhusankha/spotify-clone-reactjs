import { ArrowBigLeft, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between w-full font-semibold">
        <div className="flex items-center gap-2">
          <ChevronLeft className="bg-black cursor-pointer rounded-full w-8 h-8 p-1 hover:bg-slate-700" />
          <ChevronRight className="bg-black cursor-pointer rounded-full w-8 h-8 p-1 hover:bg-slate-700" />
        </div>
        <div className="flex gap-3">
          <button className=" text-sm px-4 py-2 bg-white text-black rounded-full hidden md:block hover:bg-gray-200">Explore Premium</button>
          <button className=" text-sm px-4 py-2 bg-black text-white rounded-full border-white border hover:text-black hover:bg-white hover:border-white">Install App</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
