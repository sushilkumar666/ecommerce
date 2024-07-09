import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     cartList : [ {
        _id:1,
        url: "https://m.media-amazon.com/images/I/81o-vnCUsZL._SL1500_.jpg",
        productName: "sushil product name",
        productDesc:
          "sushil ke description descripti ojs should be big not very big but big",
        price: 100,
      }, {
        _id: 2,
        url: "https://m.media-amazon.com/images/I/81o-vnCUsZL._SL1500_.jpg",
        productName: "sushil product name",
        productDesc:
          "sushil ke description descripti ojs should be big not very big but big",
        price: 100,
      }, {
        _id: 3,
        url: "https://m.media-amazon.com/images/I/81o-vnCUsZL._SL1500_.jpg",
        productName: "sushil product name",
        productDesc:
          "sushil ke description descripti ojs should be big not very big but big",
        price: 100,
      }]
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addProduct : (state, action) => {
            state.cartList = state.cartList.push(action.payload.product);
        },
        
            removeProduct: (state, action) => {
                state.cartList = state.cartList.filter((product)=>{
                    console.log(action.payload + " this is the value of action the payload remove prodcut")
                    return action.payload  != product._id; 
                })
            }
        
    }
});

export const  {addProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;




