import { createSlice } from "@reduxjs/toolkit";

const CartItemSlice = createSlice({
  name: "cart",
  initialState: {
    Cartitem:
      window.localStorage.getItem("cart") !== null
        ? JSON.parse(window.localStorage.getItem("cart"))
        : [],
    CartQuantity: window.localStorage.getItem('cartQuantity')!==null?parseInt(window.localStorage.getItem('cartQuantity')):parseInt(0),
    CartTotal:window.localStorage.getItem('cartTotal')!==null?parseInt(window.localStorage.getItem('cartTotal')):parseInt(0),
  },
  reducers: {
    add(state, action) {
      const index = state.Cartitem.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index >= 0) return;
      console.log(action.payload);
      state.Cartitem.push(action.payload);
      state.CartQuantity++;
      state.CartTotal += parseInt(action.payload.price);
      window.localStorage.setItem("cart", JSON.stringify(state.Cartitem));
      window.localStorage.setItem("cartQuantity", state.CartQuantity);
      window.localStorage.setItem("cartTotal", state.CartTotal);
      console.log(state.Cartitem);
    },
    remove(state, action) {
      const id = action.payload;
      const index = state.Cartitem.findIndex((item) => {
        return item.id === id;
      });
      state.CartTotal -= parseInt(state.Cartitem[index].price);
      state.CartQuantity--;
      state.Cartitem = state.Cartitem.filter((item) => item.id !== id);
      window.localStorage.setItem("cart", JSON.stringify(state.Cartitem));
      window.localStorage.setItem("cartQuantity", state.CartQuantity);
      window.localStorage.setItem("cartTotal", state.CartTotal);
    },
  },
});

export const { add, remove } = CartItemSlice.actions;
export default CartItemSlice.reducer;
