import React from "react";
import SearchBar from "./SearchBar";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center sticky top-0  bg-[#0071DC] ">
      <div className="font-s px-6 text-2xl text-white font-semibold">
        E-Commerce
      </div>

      <SearchBar></SearchBar>
      <div className="w-[33%] flex justify-evenly px-3">
        <div className="text-white flex items-center px-3 py-2 rounded-3xl hover:bg-[#1c314d]">
          <div className="pr-2">
            <IoIosHeartEmpty />
          </div>
          <div className="flex flex-col">
            <div className="text-sm">Reorder</div>
            <div className="font-bold">My Items</div>
          </div>
        </div>
        <div className="text-white flex items-center px-3 py-2 rounded-3xl hover:bg-[#1c314d]">
          <div className="pr-2">
            <FaRegUser />
          </div>
          <div className="flex flex-col">
            <div className="text-sm">Sign In</div>
            <div className="font-bold">Account</div>
          </div>
        </div>
        <div className="text-white flex items-center px-4 py-2 rounded-3xl hover:bg-[#1c314d] ">
          <div className="flex flex-col   items-center">
            <div className="relative">
              <div className="bg-[#FFC220] text-black rounded-full text-sm px-1 absolute left-4 bottom-2 border border-red-400">
                0
              </div>
              <div className="text-sm">
                <BsCart3 size={22} />
              </div>
            </div>
            <div className="font-bold">$0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
