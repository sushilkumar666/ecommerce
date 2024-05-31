import React from "react";

function Footer() {
  return (
    <div className="bg-[rgb(0,79,154)] w-[100vw] absolute bottom-0">
      <div>
        <div className="flex p-4  justify-evenly">
          <div className="flex text-white flex-col text-left   text-sm">
            <div className="font-bold text-base   ">Get to Know Us</div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                About Us
              </a>
            </div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                CareersUs
              </a>
            </div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                Press ReleasesUs
              </a>
            </div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                ecommerce ScienceUs
              </a>
            </div>
          </div>
          <div className="flex text-white flex-col text-left   text-sm">
            <div className="font-bold text-base   ">Connect with Us</div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                Facebook
              </a>
            </div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                Twitter
              </a>
            </div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                Instagram
              </a>
            </div>
          </div>
          <div className="flex text-white flex-col text-left   text-sm">
            <div className="font-bold text-base   ">Make Money with Us</div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                Sell on ecommerce
              </a>
            </div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                Sell under ecommerce Accelerator
              </a>
            </div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                Protect and Build Your Brand
              </a>
            </div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                ecommerce Global Selling
              </a>
            </div>
          </div>
          <div className="flex text-white flex-col text-left   text-sm">
            <div className="font-bold text-base   ">Let Us Help You</div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                COVID-19 and ecommerce
              </a>
            </div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                Your Account
              </a>
            </div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                Returns Centre
              </a>
            </div>
            <div>
              {" "}
              <a className="text-white" href="#">
                {" "}
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-4 text-sm text-white">
        Conditions of Use & Sale &nbsp; Privacy Notice &nbsp; Interest-Based Ads{" "}
        <br />© 2002-2024, ecommerce.com, Inc. or its affiliates
      </div>
    </div>
  );
}

export default Footer;
