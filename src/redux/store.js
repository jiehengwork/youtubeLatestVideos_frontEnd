import { createStore, combineReducers } from "redux";
import { updateArrayReducer } from "./updateArrayReducer/updateArrayReducer";
import { subscriptArrayReducer } from "./subscriptArrayReducer/subscriptArrayReducer";

const rootReducer = combineReducers({
  updateArrayReducer,
  subscriptArrayReducer
});

const projectStore = createStore( rootReducer );

export { projectStore }