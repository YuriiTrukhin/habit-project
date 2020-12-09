import { createStore, combineReducers } from "redux";
import reducer from "./reducers/habitReducers";
const { habbits, user } = reducer;

const rootReducer = combineReducers({ habbits, user });

const store = createStore(rootReducer);

export default store;
