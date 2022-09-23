import { createSlice } from "@reduxjs/toolkit";
import { cakeOrdered } from "../cake/cakeSlice";

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
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIceCreams--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIceCreams--;
    });
  },
});

const { reducer: iceCreamReducer, actions } = iceCreamSlice;

export const { ordered: iceCreamOrdered, restocked: iceCreamRestocked } =
  actions;
export default iceCreamReducer;
