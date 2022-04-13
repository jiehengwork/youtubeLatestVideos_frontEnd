import { createStore } from "redux";
import { updateArrayReducer } from "./reducer";

const projectStore = createStore( updateArrayReducer );

export { projectStore }