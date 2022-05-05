import { createStore, combineReducers } from "redux";
import { updateArrayReducer } from "./updateArrayReducer/updateArrayReducer";
import { subscriptArrayReducer } from "./subscriptArrayReducer/subscriptArrayReducer";
import { previewReducer } from "./previewReducer/previewReducer";

const rootReducer = combineReducers({
  updateArrayReducer,
  subscriptArrayReducer,
  previewReducer
});

const projectStore = createStore( rootReducer );

export { projectStore }