import React from "react";
// component
import ChannelItem from "../channelItem/ChannelItem";
// css
import { StyledDiv } from './style';

const ChannelList = () => {

  let subscriptArrayStr = localStorage.getItem('subscriptArray');
  let subscriptArray = subscriptArrayStr.split(',');
  subscriptArray.splice(0, 1);

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