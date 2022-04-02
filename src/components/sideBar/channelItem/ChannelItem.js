import React, { useState, useEffect } from "react";
// css
import { StyleA, StyleImg, StyleP, StyleButton } from "./style";

const updateLocalStorage = (func) => {
  let subscriptArrayStr = localStorage.getItem('subscriptArray');
  let subscriptArray = subscriptArrayStr.split(',')
  func(subscriptArray);
  subscriptArrayStr = subscriptArray.join(',')
  localStorage.setItem('subscriptArray', subscriptArrayStr)
}

const ChannelItem = ({ data }) => {
  // 如果是從 localStorage 中取出的 data ，轉成 Object
  if ((typeof data) === 'string') {
    data = JSON.parse(data)
  }

  const [ subscriptionStatus, setSubscriptionStatus ] = useState(false)
  
  useEffect(() => {
    // 檢查訂閱狀態 從localStorage
    if (localStorage.getItem(data.channelId) !== null) {
      setSubscriptionStatus(true);
    } else {
      setSubscriptionStatus(false);
    }
  },[data]);

  const subscriptHandler = () => {
    if ( subscriptionStatus === false) {
      // 儲存頻道資訊
      let channelData = {
        'channelId': data.channelId,
        'channelTitle': data.channelTitle,
        'channelSmallImg': data.channelSmallImg,
        'channelMediumImg': data.channelMediumImg,
        'channelBigImg': data.channelBigImg,
      };
      channelData = JSON.stringify(channelData);
      localStorage.setItem(data.channelId, channelData);

      // 更新訂閱清單
      updateLocalStorage((array) => {array.push(data.channelId)});
    } else {
      // 刪除頻道資訊
      localStorage.removeItem(data.channelId);
      
      // 更新訂閱清單
      updateLocalStorage((array) => {
        let removeIndex = array.indexOf(data.channelId)
        array.splice(removeIndex, 1);
      });
    }
    setSubscriptionStatus(current => !current);
  };

  return(
    <StyleA href="/#">
      <StyleImg src={ data.channelSmallImg } alt="channelImg"></StyleImg>
      <StyleP>{ data.channelTitle }</StyleP>
      <StyleButton onClick={ subscriptHandler }>{ subscriptionStatus ? '退訂' : '訂閱' }</StyleButton>
    </StyleA>
)};

export default ChannelItem;