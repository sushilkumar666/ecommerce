import React from "react";

function createProductForm() {
  const Categories = [
    "Electronics",
    "Mobiles",
    "Clothes",
    "Design & Decoration",
    "Games",
    "Books",
    "Furniture",
  ];
  return (
    <div>
      <div className="text-3xl my-10">Create Product</div>
      <div className="border w-[50vw] rounded-xl mx-auto border-black">
        <form action="">
          <div className="text-left pl-5">
            <label htmlFor="productName">Product Name :</label>
            <input
              id="productName"
              type="text"
              placeholder="Product Name"
              className="focus:outline-none p-4  "
            />
          </div>
          <div className="text-left pl-5">
            <label htmlFor="category">
              Category &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
            </label>
            <select
              className="focus:outline-none p-3"
              name="cars"
              id="category"
            >
              {Categories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
          </div>
          <div className="text-left pl-5">
            <label htmlFor="productTitle">Product Title &nbsp; &nbsp;:</label>
            <input
              id="productTitle"
              type="text"
              placeholder="Product Title"
              className="focus:outline-none p-4  "
            />
          </div>
          <div className="text-left pl-5">
            <label htmlFor="description">
              {" "}
              Description &nbsp;&nbsp;&nbsp; &nbsp;:
            </label>
            <input
              id="description"
              type="text"
              placeholder="Description"
              className="focus:outline-none p-4  "
            />
          </div>
          <div className="text-left pl-5">
            <label htmlFor="price">
              {" "}
              Price &nbsp;&nbsp;&nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <input
              id="price"
              type="number"
              placeholder="Price"
              className="focus:outline-none p-4  "
            />
          </div>
          <div className="text-left pl-5">
            <label htmlFor="rating">
              {" "}
              Rating &nbsp;&nbsp;&nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <input
              id="rating"
              type="number"
              max={5}
              min={1}
              step={0.1}
              placeholder="Rating"
              className="focus:outline-none p-4  "
            />
          </div>
          <div className="text-left pl-5">
            <label htmlFor="image"> Product Image :</label>
            <input id="image" type="file" className="  p-4  " />
          </div>
          <button className="text-white mb-4 bg-[#0071DC]">ADD</button>
        </form>
      </div>
    </div>
  );
}

export default createProductForm;
