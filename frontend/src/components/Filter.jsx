import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";

function Filter() {
  const [length, setLength] = useState(5000);
  const ratings = [4, 3, 2, 1];

  return (
    <div className="flex flex-col text-left w-[250px]  bg-white m-2">
      <div className="text-xl font-semibold px-4 py-3 border-b border-gray">
        Filters
      </div>

      <div className="px-4 py-3 font-semibold border-b border-gray ">
        CATEGORIES
        <div className="text-gray-500 leading-8 text-sm">
          &lt; Mobiles & Accessories
        </div>
      </div>
      <div className=" border-b py-3 border-gray">
        <div className="px-4   font-semibold ">
          PRICE
          <div className="">
            {" "}
            <input
              type="range"
              min={5000}
              max={300000}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />{" "}
          </div>
        </div>
        <div className="flex pl-4 text-sm ">
          <div>min :₹5000.00</div> &nbsp; &nbsp;
          <div>max :₹{length}.00</div>
        </div>
      </div>
      <div>
        <div className="font-semibold py-3 px-4">CUSTOMER RATINGS</div>
        <div className="px-4 text-sm">
          <form action="">
            {ratings.map((rating) => {
              return (
                <div className="flex py-1">
                  <input type="checkbox" /> &nbsp; {rating}
                  <span className="p-1">
                    {" "}
                    <IoIosStar />
                  </span>
                  & above
                </div>
              );
            })}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filter;
