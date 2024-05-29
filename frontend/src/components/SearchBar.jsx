import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className="p-4">
      <form action="">
        <div className="flex roundex-full bg-white items-center  ">
          <input
            className="rounded-full p-3 w-full"
            type="Search"
            name="search"
            id=""
          />
          <div className="bg-blue-900">
            <IoIosSearch size={30} color="white" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
