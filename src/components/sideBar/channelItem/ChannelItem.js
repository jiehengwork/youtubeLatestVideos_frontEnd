import React, { useState, useEffect } from "react";
import { StyleA, StyleImg, StyleP, StyleButton } from "./style"; // css
import { useDispatch } from "react-redux"; // redux

const ChannelItem = ({ data }) => {
  const subscriptArrayDispatch = useDispatch();
  const [ dispalyState, setDispalyState ] = useState(true) // 是否要產生此元件的旗標 ( 點擊訂閱/退訂按鈕後改變 )
  const [ subscriptionStatus, setSubscriptionStatus ] = useState(false) // 訂閱狀態
  
  if ((typeof data) === 'string') { // 如果是從 localStorage 中取出的 data ，轉成 Object
    data = JSON.parse(data)
  }

  useEffect(() => { // 檢查是否有訂閱此頻道 ( localStorage 中有無此頻道資料)
    if (localStorage.getItem(data.channelId) !== null) {
      setSubscriptionStatus(true);
    } else {
      setSubscriptionStatus(false);
    }
  },[data]);

  const subscriptHandler = () => { // 使用者點擊 訂閱按鈕
    setDispalyState(false)

    if ( subscriptionStatus === false) { // 訂閱
      let channelData = {
        // channel
        'channelId': data.channelId,
        'channelTitle': data.channelTitle,
        'channelSmallImg': data.channelSmallImg,
        'channelMediumImg': data.channelMediumImg,
        'channelBigImg': data.channelBigImg,
        // video
        'seen': 'no_new',
        'videoId': 'no_new',
        'videoTitle': 'no_new',
        'videoSmallImg': 'no_new',
        'videoMediumImg': 'no_new',
        'videoBigImg': 'no_new',
        // update
        'lastUpdateTime': '0'
      };
      channelData = JSON.stringify(channelData);
      localStorage.setItem(data.channelId, channelData); // 儲存頻道資訊

      subscriptArrayDispatch({ // 更新訂閱清單
        type: 'SUB_ADD_ITEM',
        payload: { item: data.channelId }
      })
    } else { //退訂
      localStorage.removeItem(data.channelId); // 刪除頻道資訊
      
      subscriptArrayDispatch({ // 更新訂閱清單
        type: 'SUB_DELETE_ITEM',
        payload: { item: data.channelId }
      })
    }

    setSubscriptionStatus(current => !current); // 改變按鈕文字
  };

  if (dispalyState) { // 顯示元件
    return (
        <StyleA href="/#">
          <StyleImg src={ data.channelSmallImg } alt="channelImg"></StyleImg>
          <StyleP>{ data.channelTitle }</StyleP>
          <StyleButton onClick={ subscriptHandler }>{ subscriptionStatus ? '退訂' : '訂閱' }</StyleButton>
        </StyleA>
  )} else { // 點擊訂閱/退訂按鈕後
    return (
      <></>
    )
  }
};

export default ChannelItem;