import { REVERSE } from "./previewAction";

const initState = {
  preview: false
}

const previewReducer = ( state = initState, action ) => {
  switch( action.type ) {
    case REVERSE: {
      const rePreview = !(state.preview)
      return { preview: rePreview }
    }
    default:
      return state;
  }
}

export { previewReducer }