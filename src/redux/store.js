import { createStore } from "redux";
import { updateArrayReducer } from "./updateArrayReducer/updateArrayReducer";

const projectStore = createStore( updateArrayReducer );

export { projectStore }