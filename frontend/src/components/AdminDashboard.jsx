import React from "react";
import AllOrder from "./AllOrder";
import AllProductList from "./AllProductList";
import AdminDetails from "./AdminDetails";
import { useParams } from "react-router-dom";
import AddAndUpdateCategory from "./AddAndUpdateCategory";
import { useNavigate } from "react-router-dom";
import CreateProductForm from "./CreateProductForm";

function AdminDashboard() {
  const { adminroutes } = useParams();
  const navigate = useNavigate();

  let componentToRender;

  switch (adminroutes) {
    case "allorder":
      componentToRender = <AllOrder />;
      break;
    case "allproductlist":
      componentToRender = <AllProductList />;
      break;
    case "updatecategory":
      componentToRender = <AddAndUpdateCategory />; // Assuming you have a Component named "Component"
      break;
    case "addproduct":
      componentToRender = <CreateProductForm />; // Assuming you have a Component named "Component"
      break;
    case "updateproduct":
      componentToRender = <CreateProductForm />; // Assuming you have a Component named "Component"
      break;
    default:
      componentToRender = <AdminDetails />;
  }

  return (
    <>
      <div className="flex items-start">
        <div className="flex w-[25%] my-10 mx-5 items-center">
          <table className="border-gray-400">
            <tbody>
              <tr>
                <td>
                  <div
                    onClick={() => navigate("/admin/dashboard")}
                    className="border bg-[#0071DC] text-white border-gray-300 text-3xl p-4 px-8"
                  >
                    Admin Dashboard
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    onClick={() => navigate("/admin/addproduct")}
                    className="border cursor-pointer leading-10 border-gray-300 text-xl p-2"
                  >
                    Create Product
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    onClick={() => navigate("/admin/updatecategory")}
                    className="border cursor-pointer leading-10 border-gray-300 text-xl p-2"
                  >
                    Create Category
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    onClick={() => navigate("/admin/updatecategory")}
                    className="border cursor-pointer leading-10 border-gray-300 text-xl p-2"
                  >
                    Update Category
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    onClick={() => navigate("/admin/allorder")}
                    className="border cursor-pointer leading-10 border-gray-300 text-xl p-2"
                  >
                    All Orders
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex w-[70%] my-10 mx-5 items-center">
          {componentToRender}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
