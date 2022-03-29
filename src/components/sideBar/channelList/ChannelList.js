import React, { useEffect } from "react";
// component
import ChannelItem from "../channelItem/ChannelItem";

const ChannelList = () => {

  let subscriptArrayStr = localStorage.getItem('subscriptArray');
  let subscriptArray = subscriptArrayStr.split(',');
  subscriptArray.splice(0, 1);

  let ChannelItemArray = subscriptArray.map( item => {
    let itemData = localStorage.getItem(item);
    return <ChannelItem data={itemData}/>
  });

  return(
    <div>
      {ChannelItemArray}
    </div>
)};

export default ChannelList;