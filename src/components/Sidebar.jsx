import {
  CirclePlus,
  HeartIcon,
  Home,
  LibraryIcon,
  Rss,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="text-gray-500 p-5 border-r border-gray-900 hidden lg:flex flex-col">
      <div className="space-y-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 hover:text-white"
        >
          <Home className="h-5 w-5" />
          <p className="font-semibold">Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p className="font-semibold">Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p className="font-semibold">Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <CirclePlus className="h-5 w-5" />
          <p className="font-semibold">Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <Rss className="h-5 w-5" />
          <p className="font-semibold">Your episodes</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p className="font-semibold">Liked Songs</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
      </div>

      <div className="bg-gray-500 p-3 space-y-3 rounded-md text-white">
        <div>
          <p className="font-semibold">Let's findsome podcasts to follow</p>
          <p>We'll keep you update on new episodes</p>
        </div>
        <button className="px-4 py-2 rounded-full bg-white font-semibold hover:border-2 hover:bg-gray-500 hover:text-white text-black">
          Brows podcasts
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
