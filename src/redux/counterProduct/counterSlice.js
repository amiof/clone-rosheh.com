import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productNumber: 0,
  productsList: [],
};
export const counterProductSlice = createSlice({
  name: "counterProductSlice",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { id } = action.payload;
      const existproduct = state.productsList.find(
        (product) => product.id == id,
      );
      if (!existproduct) {
        state.productNumber++;
        state.productsList.push({ ...action.payload });
      } else {
        alert("this product availebale");
      }
    },
    remove: (state, action) => {
      const { id } = action.payload;
      const existproduct = state.productsList.find(
        (product) => product.id == id,
      );
      if (existproduct) {
        // console.log(existproduct)
        state.productsList= state.productsList.filter(
          (product) => product.id !== id,
        );
        state.productNumber--;
      }
    },
  },
});

export const { increment, remove } = counterProductSlice.actions;
export default counterProductSlice.reducer;
