import React, { useState, useEffect } from "react";
// component
import ChannelItem from "../channelItem/ChannelItem";
// css
import { StyledDiv } from './style';

const ChannelList = () => {

  // 訂閱頻道清單
  const [ subscriptArray, setSubscriptArray ] = useState([])

  // 首次渲染後，從 localStorage 取出儲存的 array
  useEffect(() => {
    let localArrayStr = localStorage.getItem('subscriptArray');
    let localArray = localArrayStr.split(',');
    localArray.splice(0, 1)
    setSubscriptArray(localArray)
  },[])

  let ChannelItemArray = subscriptArray.map( item => {
    let itemData = localStorage.getItem(item);
    return <ChannelItem data={itemData} key={item} />
  });

  return(
    <StyledDiv>
      {ChannelItemArray}
    </StyledDiv>
)};

export default ChannelList;