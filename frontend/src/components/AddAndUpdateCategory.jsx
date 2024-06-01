import React from "react";

function AddAndUpdateCategory() {
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
      <div className="flex  flex-col">
        <div className="text-2xl my-10">All Categories</div>
        <div>
          <div className="w-[40vw] items-center flex justify-between border border-black text-left rounded-md text-xl font-semibold pl-4 mb-5 mx-auto">
            <form action="">
              <div>
                <label className="text-left text-base" htmlFor="createCategory">
                  Create Category :
                </label>
                <input
                  className="hover:outline-none text-base p-2 "
                  type="text"
                  id="createCategory"
                  placeholder="&nbsp;Create Category"
                />
              </div>
            </form>
            <button className="bg-green-600 m-2 mx-6 text-white text-base font-semibold">
              Add
            </button>
          </div>
        </div>
        <div className="mb-10">
          {Categories.map((category) => {
            return (
              <div className="flex items-center  text-left pl-4 justify-between border w-[40vw] rounded-md m-1 mx-auto p-1 border-gray-400">
                <div className=" w-[200px] text-base font-semibold">
                  {category}
                </div>
                <div className="flex w-[200px] justify-evenly  ">
                  <div className=" px-5 py-2 font-semibold  ] text-white rounded-md bg-[#004F9A]">
                    Edit
                  </div>
                  <div className=" px-2 py-2 text-center  font-semibold rounded-md text-white bg-red-600">
                    Delete
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AddAndUpdateCategory;
