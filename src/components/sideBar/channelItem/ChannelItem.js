import React, { useState, useEffect, useCallback } from "react";
// css
import { StyleA, StyleImg, StyleP, StyleButton } from "./style";

const ChannelItem = ({ data }) => {
  // 將從 localStorage 中取出的 data 轉成 Object
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

  const subscriptHandler = useCallback(() => {
    if ( subscriptionStatus === false) {
      // 儲存頻道資訊
      let channelData = {
        'channelTitle': data.channelTitle,
        'channelSmallImg': data.channelSmallImg,
        'channelMediumImg': data.channelMediumImg,
        'channelBigImg': data.channelBigImg,
      };
      channelData = JSON.stringify(channelData);
      localStorage.setItem(data.channelId, channelData);

      // 更新訂閱清單
      let subscriptArrayStr = localStorage.getItem('subscriptArray');
      let subscriptArray = subscriptArrayStr.split(',')
      subscriptArray.push(data.channelId)
      subscriptArrayStr = subscriptArray.join(',')
      localStorage.setItem('subscriptArray', subscriptArrayStr)
    } else {
      // 刪除頻道資訊
      localStorage.removeItem(data.channelId);

      // 更新訂閱清單
      let subscriptArrayStr = localStorage.getItem('subscriptArray');
      let subscriptArray = subscriptArrayStr.split(',')
      let removeIndex = subscriptArray.indexOf(data.channelId)
      subscriptArray.splice(removeIndex, 1);
      subscriptArrayStr = subscriptArray.join(',')
      localStorage.setItem('subscriptArray', subscriptArrayStr)
    }
    setSubscriptionStatus(current => !current);
  },[subscriptionStatus, data]);

  return(
    <StyleA href="/#">
      <StyleImg src={ data.channelSmallImg } alt="channelImg"></StyleImg>
      <StyleP>{ data.channelTitle }</StyleP>
      <StyleButton onClick={ subscriptHandler }>{ subscriptionStatus ? '退訂' : '訂閱' }</StyleButton>
    </StyleA>
)};

export default ChannelItem;