import { UP_UPDATE, UP_DELETE_ITEM, UP_PUT_FIRST, UP_CLEAR } from './updateArrayAction'

const initState = {
  updateArray: [],
};

const updateArrayReducer = ( state = initState, action ) => {
  switch( action.type ) {
    case UP_UPDATE: { // 更新整個列表
      return { updateArray: action.payload.newArray };
    }
    case UP_DELETE_ITEM: { // 刪除
      let item = action.payload.item;
      let arrayCopy = [ ...state.updateArray ]
      arrayCopy.splice( arrayCopy.indexOf(item), 1 )
      return { updateArray: arrayCopy };
    }
    case UP_PUT_FIRST: { // 將指定的頻道放到第一個
      const item = action.payload.item;
      let arrayCopy = [ ...state.updateArray ]
      arrayCopy.sort(( x, y ) => {
        return x === item ? -1 : y === item ? 1 : 0;
      })
      return { updateArray: arrayCopy }
    }
    case UP_CLEAR: { // 清除列表
      return { updateArray: [] }
    }
    default: 
      return state;
  }
}

export { updateArrayReducer }