import React from "react";

function AdminDashboard() {
  return (
    <div className="flex w-[60vw] border border-black    items-center  mx-auto  mt-20">
      <table className=" border-collapse border border-gray-400">
        <tbody>
          <tr>
            <td>
              {" "}
              <div className="border bg-[#0071DC] text-white border-gray-300 text-3xl p-4 ">
                Admin Dashboard
              </div>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className="border border-gray-300 text-xl p-2 ">
                Create Product
              </div>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className="border border-gray-300 text-xl p-2 ">
                Update Product
              </div>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className="border border-gray-300 text-xl p-2 ">
                Create Category
              </div>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className="border border-gray-300  text-xl  p-2 ">
                Update Category
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="ml-20 text-left leading-6">
        <div className="text-3xl ">Admin Details</div>
        <div className=" text-xl ">Name: sushil sharma</div>
        <div className=" text-xl ">Email : sushilssharma064@gmail.com</div>
        <div className=" text-xl ">Phone : 9999999999</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
