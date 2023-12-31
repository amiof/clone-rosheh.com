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
        state.productNumber=state.productNumber + action.payload.number;
        state.productsList.push({ ...action.payload });
      } else {
       existproduct.number =existproduct.number + action.payload.number
        state.productNumber= existproduct.number
        // alert("this product availebale");
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
        state.productNumber= state.productNumber - existproduct.number;
      }
    },
  },
});

export const { increment, remove } = counterProductSlice.actions;
export default counterProductSlice.reducer;
