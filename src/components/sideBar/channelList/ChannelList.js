import React, { useEffect } from "react";
import ChannelItem from "../channelItem/ChannelItem";
import { StyledDiv } from './style'; // css
import { useSelector, useDispatch } from "react-redux"; // redux

const ChannelList = () => {
  const subscriptArrayDispatch = useDispatch()

  useEffect(() => { // 首次渲染後，從 localStorage 取出儲存的訂閱列表
    let localArrayStr = localStorage.getItem('subscriptArray');
    let localArray = localArrayStr.split(',');
    localArray.splice(0, 1)
    subscriptArrayDispatch({ // 將 localStorage 的資料更新到 Redux 的 State
      type: 'SUB_GET_LOCAL',
    })
  },[])

  let ChannelItemArray
  const subscriptArray = useSelector( state => state.subscriptArrayReducer.subscriptArray)

  if ( subscriptArray.length !== 0 ) { // 訂閱列表不為空
    ChannelItemArray = subscriptArray.map( item => {
      let itemData = localStorage.getItem(item);
      return <ChannelItem data={itemData} key={item} />
    });
  }

  return(
    <StyledDiv>
      {ChannelItemArray}
    </StyledDiv>
)};

export default ChannelList;