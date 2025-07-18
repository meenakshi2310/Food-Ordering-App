import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //addItems is action
    addItems: (state, action) => {
      //this is a reducer
      //mutating the state here //Redux Toolkit usses immer behind the scene
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; 
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
