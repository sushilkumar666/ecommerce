import React from "react";

function Category() {
  let category = [
    {
      imageUrl:
        "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
      categoryName: "Grocery",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
      categoryName: "Mobiles",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100",
      categoryName: "Fashion",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100",
      categoryName: "Electronics",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100",
      categoryName: "Home & Furniture",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100",
      categoryName: "Applicances",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100",
      categoryName: "Travel",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100",
      categoryName: "Beauty, Toys & more",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100",
      categoryName: "Two Wheelers",
    },
  ];

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex  justify-evenly">
          {category.map((cat, index) => {
            return (
              <div key={index} className="text-center    ">
                <div className="  text-center ">
                  <img className="mx-auto" src={cat.imageUrl} alt="" />
                </div>
                <div className="font-semibold">{cat.categoryName}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
