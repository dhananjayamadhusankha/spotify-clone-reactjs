import {
  CirclePlus,
  HeartIcon,
  Home,
  LibraryIcon,
  Rss,
  SearchIcon,
} from "lucide-react";
import React from "react";
// bg-[#121212]
// w-[25%] h-full p-2 flex-col gap-2 lg:flex text-white
// bg-blue-500 h-[15%] rounded flex flex-col justify-around
const Sidebar = () => {
  return (
    <div className="text-gray-500 p-5 border-r border-gray-900 bg-[#121212]">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 hover:text-white cursor-pointer">
          <Home className="h-5 w-5" />
          <p className="font-semibold">Home</p>
        </div>
        <div className="flex items-center space-x-2 hover:text-white cursor-pointer">
          <SearchIcon className="h-5 w-5" />
          <p className="font-semibold">Search</p>
        </div>
        <div className="flex items-center space-x-2 hover:text-white cursor-pointer">
          <LibraryIcon className="h-5 w-5" />
          <p className="font-semibold">Your Library</p>
        </div>
        <hr className="border-t-[0.1px] border-gray-900" />
        {/* --------------------------------------------------------------------------------- */}
        <div className="flex items-center space-x-2 hover:text-white cursor-pointer">
          <CirclePlus className="h-5 w-5" />
          <p className="font-semibold">Create Playlist</p>
        </div>
        <div className="flex items-center space-x-2 hover:text-white cursor-pointer">
          <Rss className="h-5 w-5" />
          <p className="font-semibold">Your episodes</p>
        </div>
        <div className="flex items-center space-x-2 hover:text-white cursor-pointer">
          <HeartIcon className="h-5 w-5" />
          <p className="font-semibold">Liked Songs</p>
        </div>
        <hr className="border-t-[0.1px] border-gray-900" />
      </div>
    </div>
  );
};

export default Sidebar;
