import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModalStatus: false,
};
export const shoppingCardSlice = createSlice({
  name: "shoppingCardSlice",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModalStatus = !state.showModalStatus;
    },
  },
});

export const { toggleModal } = shoppingCardSlice.actions;
export default shoppingCardSlice.reducer;
