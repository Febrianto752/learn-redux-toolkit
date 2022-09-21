import "./App.css";
import { createStore, bindActionCreators, combineReducers } from "redux";

// create action
const orderCake = () => {
  return {
    type: "ORDERED_CAKE",
    payload: 1,
  };
};

const restockCake = (sum) => {
  return {
    type: "RESTOCK_CAKE",
    payload: sum,
  };
};

const orderIceCream = () => {
  return {
    type: "ORDER_ICECREAM",
    payload: 1,
  };
};

const restockIceCream = (sum) => {
  return {
    type: "RESTOCK_ICECREAM",
    payload: sum,
  };
};

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 0,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 5,
};

// create reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "ORDERED_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case "RESTOCK_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "ORDER_ICECREAM":
      return {
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case "RESTOCK_ICECREAM":
      return {
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// create store
const store = createStore(reducers);
console.log("Initial State : ", store.getState());

store.subscribe(() => console.log("Updated State : ", store.getState())); // selalu di jalankan ketika dispatch(action())
store.dispatch(orderCake()); // setiap kali dispatch(action()) maka state akan terupdate sesuai dengan logic yang ada di reducer
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(5));
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(restockIceCream(5));

function App() {
  return <div></div>;
}

export default App;
