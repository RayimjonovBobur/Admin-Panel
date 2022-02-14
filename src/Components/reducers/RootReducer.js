import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import store from "./store";

const rootReducer = createStore(store, composeWithDevTools());

export default rootReducer;
