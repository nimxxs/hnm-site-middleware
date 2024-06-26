import {composeWithDevTools} from '@redux-devtools/extension';
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from './reducers/Index'

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store