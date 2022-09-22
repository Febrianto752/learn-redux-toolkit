import "./App.css";
import { applyMiddleware, createStore } from "redux";
import produce from "immer";
import logger from "redux-logger";

const changeStreet = (street) => {
  return {
    type: "CHANGE_STREET",
    payload: street,
  };
};

const initialState = {
  name: "FShop",
  address: {
    street: "jl.kambuna",
    city: "Bekasi",
    country: "Indonesian",
  },
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_STREET":
      // Sebelum memakai immer
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      // Sesudah memakai immer
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(shopReducer, applyMiddleware(logger));
console.log("Initial state : ", store.getState());
// store.subscribe(() => {
//   console.log("Updated state : ", store.getState());
// });

store.dispatch(changeStreet("jl. ABC, No.3"));
store.dispatch(changeStreet("jl. ABC, No.4"));

function App() {
  return <div></div>;
}

export default App;
