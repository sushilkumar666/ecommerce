import React from "react";
import { IoIosSearch } from "react-icons/io";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="flex bg-[#00479A] ">
      <h2 className="">E-Commerce</h2>

      <SearchBar></SearchBar>
      <div>My items</div>
      <div>
        Sign In <br /> <span>Account</span>{" "}
      </div>
      <div>
        <IoIosSearch size={30} color="blue" />
      </div>
    </div>
  );
}

export default Navbar;
