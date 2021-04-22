import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import pokeReducer from "../reducers/reducers.js";
import thunk from "redux-thunk";

const pokeStore = createStore(pokeReducer,  composeWithDevTools(applyMiddleware(thunk)));

export default pokeStore