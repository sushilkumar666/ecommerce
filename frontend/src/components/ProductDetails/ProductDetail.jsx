import React from "react";
import { IoIosStar } from "react-icons/io";
import "./ProductDetail.css";

function ProductDetail() {
  return (
    <div>
      <div className="flex   ">
        <div>
          <div className="border  flex flex-col items-center p-16">
            <img
              width={"1000px"}
              className="mx-auto   "
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/z/r/d/-original-imagywnzhh3dnqvk.jpeg?q=70&crop=false"
              alt=""
            />
          </div>
          <div className="flex justify-center font-semibold  mx-auto">
            <div className="text-white w-[40%]  m-1 cursor-pointer bg-[#FF9F00] px-4 py-3">
              ADD TO CART
            </div>
            <div className="text-white  w-[40%] m-1   cursor-pointer bg-[#FB641B] px-4 py-3">
              BUY NOW
            </div>
          </div>
        </div>

        <div className="text-left px-6 py-4">
          <div className="text-lg text-black my-3">
            Fastrack Optimus Pro with 1.43" AMOLED Display &
            AOD(466x466),Functional Crown,BT Calling Smartwatch (Blue Strap,
            Free Size)
          </div>

          <div className="text-sm flex  text-gray-600 font-semibold my-3">
            {" "}
            <div className="flex">
              <div className="text-white flex bg-[#388E3C] pl-1 rounded-sm  ">
                4.3{" "}
                <span className="p-1">
                  {" "}
                  <IoIosStar color="white" />
                </span>
              </div>{" "}
              <div> &nbsp;Ratings</div>
            </div>
          </div>
          <div className="text-[#388E3C] text-sm font-bold">price</div>
          <div className="text-3xl font-semibold">₹2,199</div>
          <div className="text-[16px] font-semibold ">Available offers</div>
          <div>
            <ol className="text-[15px] leading-7 pl-4">
              <li className="image-bullet bg-white px-3 py-3  rounded shadow">
                <b> Bank Offer </b> Get ₹50 instant discount on first Flipkart
                UPI txn on order of ₹200 and above T&C
              </li>
              <li className="image-bullet bg-whitep-3rounded px-3 py-3 shadow">
                <b> Bank Offer </b> 5% Cashback on Flipkart Axis Bank CardT&C
              </li>
              <li className="image-bullet bg-whitep-3rounded px-3 py-3 shadow">
                <b> Bank Offer </b>10% off up to ₹1,250 on HDFC Bank Credit Card
                EMI Txns, Tenure: 6 and 9 months, Min Txn Value: ₹7500T&C
              </li>
              <li className="image-bullet bg-whitep-3rounded px-3 py-3 shadow">
                <b> Special Price </b>Get extra 63% off (price inclusive of
                cashback/coupon)T&C
              </li>
            </ol>
          </div>
          <br />
          <div className="font-bold">About this item</div>
          <div>
            Package Contents: 6-Pieces Glasses || Capacity : 260 ML ✔️【IDEAL
            FOR】:- Glass makes them ideal to serve drinks to your guests in
            style and class. This water glass set is ideal for highball
            glass|long glass?Tumbler|cocktails|mocktails|serving
            water|lemonade|cold drinks|juices|cocktails|cold
            coffee|alcohol|Scot|Beer|Iced Tea|Milkshake|Mocktail.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
