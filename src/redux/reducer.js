const initState = {
  updateArray: [],
};

const updateArrayReducer = ( state = initState, action ) => {
  switch( action.type ) {
    case 'UPDATE_ARRAY': {
      return { updateArray: action.payload.newArray };
    }
    case 'DELETE_ITEM': {
      let item = action.payload.item;
      let arrayCopy = state.updateArray.splice()
      let newArray = arrayCopy.splice( arrayCopy.indexOf(item), 1 )
      return { updateArray: newArray };
    }
    default: 
      return state;
  }
}

export { updateArrayReducer }