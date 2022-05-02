import React from "react";
import { StyleVideoItemA, StyleImg, StyleDiv, StyleH3, StyleP } from "./style"; // css
import { useDispatch } from "react-redux"; // redux


const VideoItem = ({ data }) => {
  const updateArrayDispatch = useDispatch();
  
  const putVideoFirst = () => { // 使用者點擊影片列表中的影片
    updateArrayDispatch({ // 將點擊的影片所屬頻道移到第一個
      type: 'UP_PUT_FIRST',
      payload: { item: data.channelId }
    })
  }

  return (
    <StyleVideoItemA onClick={ putVideoFirst }>
      <StyleImg title={data.videoTitle} src={ data.videoSmallImg } alt="channelImg"/>
      <StyleDiv>
        <StyleH3 title={data.videoTitle}>{ data.videoTitle }</StyleH3>
        <StyleP title={data.channelTitle}>{ data.channelTitle }</StyleP>
      </StyleDiv>
    </StyleVideoItemA>
)};

export default VideoItem;