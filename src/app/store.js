import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/ice_cream/iceCreamSlice";

const store = configureStore({
  reducer: {
    cakes: cakeReducer,
    iceCreams: iceCreamReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
