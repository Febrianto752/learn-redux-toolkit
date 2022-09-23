import "./App.css";

import store from "./app/store";
// import { cakeOrdered, cakeRestocked } from "./features/cake/cakeSlice";
// import {
//   iceCreamOrdered,
//   iceCreamRestocked,
// } from "./features/ice_cream/iceCreamSlice";
import { fetchUsers } from "./features/users/usersSlice";

console.log("Initial State : ", store.getState()); // output : Initial State : Object: {cake:{...}}
store.subscribe(() => {
  console.log("Updated State : ", store.getState());
});

store.dispatch(fetchUsers());

function App() {
  return <div></div>;
}

export default App;
