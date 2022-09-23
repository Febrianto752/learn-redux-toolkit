import "./App.css";

import store from "./app/store";
import { cakeOrdered, cakeRestocked } from "./features/cake/cakeSlice";
import {
  iceCreamOrdered,
  iceCreamRestocked,
} from "./features/ice_cream/iceCreamSlice";

console.log("Initial State : ", store.getState()); // output : Initial State : Object: {cake:{...}}
store.subscribe(() => {
  console.log("Updated State : ", store.getState());
});

store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(cakeRestocked(5));

store.dispatch(iceCreamOrdered());
store.dispatch(iceCreamOrdered());
store.dispatch(iceCreamRestocked(6));

function App() {
  return <div></div>;
}

export default App;
