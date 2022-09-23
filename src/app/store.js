import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/ice_cream/iceCreamSlice";

const store = configureStore({
  reducer: {
    cakes: cakeReducer,
    iceCreams: iceCreamReducer,
  },
});

export default store;
