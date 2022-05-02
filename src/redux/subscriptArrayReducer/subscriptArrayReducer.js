import { SUB_GET_LOCAL, SUB_ADD_ITEM, SUB_DELETE_ITEM } from "./subscriptArrayAction";

const initState = {
  subscriptArray: [],
};

const updateLocalStorage = (array) => { // 更新 LocalStorage 的 function
  let arrayStr = array.join(',')
  localStorage.setItem('subscriptArray', arrayStr)
}

const subscriptArrayReducer = ( state = initState, action ) => {
  switch( action.type ) {
    case SUB_GET_LOCAL: { // 剛進入頁面 取得 localStorage 儲存的訂閱列表
      let localArrayStr = localStorage.getItem('subscriptArray');
      let localArray = localArrayStr.split(',');
      if ( localArray[0] === '' ) {
        localArray.splice(0, 1);
      }
      return { subscriptArray: localArray };
    }
    case SUB_ADD_ITEM: { // 新增頻道
      let item = action.payload.item;
      let newArray = [ ...state.subscriptArray ]
      newArray.push( item )

      updateLocalStorage(newArray) // 同步儲存在 localStorage

      return { subscriptArray: newArray }
    }
    case SUB_DELETE_ITEM: { // 刪除頻道
      let item = action.payload.item;
      let newArray = [ ...state.subscriptArray ]
      let removeIndex = newArray.indexOf( item )
      newArray.splice(removeIndex, 1);

      updateLocalStorage(newArray) // 同步儲存在 localStorage

      return { subscriptArray: newArray }
    }
    default:
      return state;
  }
}

export { subscriptArrayReducer }