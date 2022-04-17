import { UPDATE_ARRAY, DELETE_ITEM, PUT_FIRST } from './action'

const initState = {
  updateArray: [],
};

const updateArrayReducer = ( state = initState, action ) => {
  switch( action.type ) {
    case UPDATE_ARRAY: {
      return { updateArray: action.payload.newArray };
    }
    case DELETE_ITEM: {
      let item = action.payload.item;
      let arrayCopy = [ ...state.updateArray ]
      let newArray = arrayCopy.splice( arrayCopy.indexOf(item), 1 )
      console.log(newArray)
      return { updateArray: newArray };
    }
    case PUT_FIRST: {
      const item = action.payload.item;
      let arrayCopy = [ ...state.updateArray ]
      arrayCopy.sort(( x, y ) => {
        return x === item ? -1 : y === item ? 1 : 0;
      })
      return { updateArray: arrayCopy }
    }
    default: 
      return state;
  }
}

export { updateArrayReducer }