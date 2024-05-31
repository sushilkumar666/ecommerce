import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className="p-4 w-[40%] ">
      <form action="">
        <div className="flex rounded-full bg-white items-center  px-2 ">
          <input
            className="rounded-full focus:outline-none p-3 border-none w-full"
            type="Search"
            name="search"
            placeholder="Search everything at online and in store"
            id=""
          />
          <div className="bg-[#004f9a]  hover:bg-[#1c314d] rounded-full p-1">
            <IoIosSearch size={30} color="white" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
