import { createSlice } from "@reduxjs/toolkit";

const CartItemSlice = createSlice({
  name: "cart",
  initialState: {
    Cartitem: [],
    CartQuantity:0,
    CartTotal:0
  },
  reducers: {
    add(state, action) {
      
      const index = state.Cartitem.findIndex((item)=>{
        return item.id === action.payload.id;
      });
      if(index >=0 )
      return;
      console.log(action.payload);
      state.Cartitem.push(action.payload);
      state.CartQuantity++;
      state.CartTotal+=parseInt(action.payload.price);
    },
    remove(state,action){
      const id=action.payload;
      const index = state.Cartitem.findIndex((item)=>{
        return item.id === id;
      });
      state.CartTotal-=parseInt(state.Cartitem[index].price)
      state.CartQuantity--;
       state.Cartitem= state.Cartitem.filter((item)=>item.id !== id)
     
    }

  },
});

export const { add , remove} = CartItemSlice.actions;
export default CartItemSlice.reducer;
