import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const userStatus = useSelector((state) => state.auth.status);
  const cartList = useSelector((state) => state.cart.cartList);

  // console.log(userStatus + " authStatus from redux");
  // console.log(cartList + " cartList from redux");

  const removingProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  return (
    <div>
      <div className="bg-blue-100">
        <div
          style={{ lineHeight: "2rem" }}
          className="text-4xl pt-8 font-semibold"
        >
          Hello admin
        </div>
        <div style={{ lineHeight: "4rem" }} className="text-xl">
          You Have {cartList.length} items in your cart
        </div>
      </div>
      <div className="flex">
        <div className="w-[55%] ml-8">
          {cartList.map((product, index) => (
            <div
              key={index}
              className="flex mx-6 my-2 rounded-lg pr-6 py-2 pl-2 border border-gray-300 justify-between"
            >
              <div width="30%">
                <img className="w-[300px] h-[150px]" src={product.url} alt="" />
              </div>
              <div className="text-left px-4">
                <div className="leading-8">Name: {product.productName}</div>
                <div className="leading-8">
                  Description: {product.productDesc}
                </div>
                <div className="leading-8">Price: ₹{product.price}</div>
              </div>
              <div className="my-auto">
                <button
                  onClick={() => removingProduct(product._id)}
                  className="py-2 px-6 text-white bg-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[35%]">
          <div
            style={{ lineHeight: "2rem" }}
            className="text-3xl font-semibold"
          >
            Cart Summary
          </div>
          <div style={{ lineHeight: "4rem" }}>Total | Checkout | Payment</div>
          <hr className="border border-gray-300" />
          <div className="leading-10 mt-10">
            <div
              style={{ lineHeight: "3rem" }}
              className="text-2xl font-semibold"
            >
              Total: ₹111
            </div>
            <div
              style={{ lineHeight: "3rem" }}
              className="text-2xl font-semibold"
            >
              Current Address
            </div>
            <div
              style={{ lineHeight: "3rem" }}
              className="text-2xl font-semibold"
            >
              Address
            </div>
          </div>
          <div>
            <br />
            <button className="text-yellow-500 border border-yellow-500 py-3 px-6">
              Update Address
            </button>
            <p>&nbsp;</p>
            <button className="text-white bg-blue-500 py-3 px-6">
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
