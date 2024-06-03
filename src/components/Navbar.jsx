import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-between w-full font-semibold">
        <div className="flex items-center gap-2">
          <ChevronLeft onClick={()=>(navigate(-1))} className="bg-black cursor-pointer rounded-full w-8 h-8 p-1 hover:bg-slate-700" />
          <ChevronRight onClick={()=>(navigate(1))} className="bg-black cursor-pointer rounded-full w-8 h-8 p-1 hover:bg-slate-700" />
        </div>
        <div className="flex gap-3 items-center">
          <button className=" text-sm px-4 py-2 bg-white text-black rounded-full hidden md:block hover:bg-gray-200">Explore Premium</button>
          <button className=" text-sm px-4 py-2 bg-black text-white rounded-full border-white border hover:text-black hover:bg-white hover:border-white">Install App</button>
          <p className="flex bg-purple-500 w-8 h-8 rounded-full justify-center items-center cursor-pointer hover:bg-purple-600">D</p>
        </div>
      </div>
        <div className=" flex gap-4 items-center mt-4">
          <button className=" bg-white px-4 py-1 text-black rounded-full cursor-pointer">All</button>
          <button className="px-4 py-1 rounded-full text-gray-500 cursor-pointer hover:text-white">Music</button>
          <button className="px-4 py-1 rounded-full text-gray-500 cursor-pointer hover:text-white">Podcasts</button>
        </div>
    </>
  );
};

export default Navbar;
