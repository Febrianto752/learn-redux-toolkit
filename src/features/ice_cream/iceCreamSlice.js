import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIceCreams: 5,
};

const iceCreamSlice = createSlice({
  name: "ice cream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
});

const { reducer: iceCreamReducer, actions } = iceCreamSlice;

export const { ordered: iceCreamOrdered, restocked: iceCreamRestocked } =
  actions;
export default iceCreamReducer;
