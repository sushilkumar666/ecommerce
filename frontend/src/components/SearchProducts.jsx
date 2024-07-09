import React, { useRef } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

function SearchProducts() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.product);

  // const userData = useSelector((state) => state.auth.userData);

  const products = [
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
    {
      url: "https://i5.walmartimages.com/seo/Blackstone-Adventure-Ready-2-Burner-22-Propane-Omnivore-Griddle-with-Flex-fold-Legs_df67dffa-5fdb-45d5-beca-d851deb2035d.8a280f09f776f98df0ba311b49101c8e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      price: "247.00",
      brand: "Blackstone Adventure Ready 2-Buerner 22",
    },
  ];

  const navRef = useRef(null);
  const handleNav = (direction) => {
    if (navRef.current) {
      const scrollAmount = 200;
      if (direction === "left") {
        navRef.current.scrollLeft -= 500;
      } else if (direction === "right") {
        navRef.current.scrollLeft += 500;
      }
    }
  };

  const addToCart = (product) => {
    console.log(JSON.stringify(product) + " product add to cart clicked");
    products.push(product);
  };

  return (
    <>
      <div
        ref={navRef}
        className="w-[90vw] mx-auto my-auto relative flex flex-wrap "
      >
        <div className="flex  flex-wrap bg-white ">
          {products.map((product, index) => {
            return (
              <div key={index} className="card px-3">
                <div className="w-[200px] border border-gray cursor-pointer p-4">
                  <div className="relative">
                    <div className="absolute top-2 cursor-pointer right-0  ">
                      <IoIosHeartEmpty size={"25"} />
                    </div>
                    <img width={"200px"} src={product.url} alt="" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-semibold">
                      ₹{product.price}
                    </div>
                    <div>{product.brand}</div>
                    <div
                      onClick={() => addToCart(product)}
                      className="border border-black flex items-center w-[80px] text-center rounded-full font-semibold cursor-pointer mt-2 hover:border-2 px-2 py-1"
                    >
                      <span className="pl-2 pr-1">
                        {" "}
                        <FaPlus size={"13"} />
                      </span>{" "}
                      Add
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchProducts;
