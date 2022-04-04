import React, { useState } from 'react';
import axios from 'axios';
// component
import VideoItem from "./videoItem/VideoItem";
// css
import { StyleVideoBarDiv } from './style';

const VideoBar = () => {


  const subscriptArrayStr = localStorage.getItem('subscriptArray');
  const subscriptArray = subscriptArrayStr.split(',')
  subscriptArray.splice(0, 1);

  let videoItemArray = []
  subscriptArray.forEach( item => {
    // 取得頻道最新影片資訊
    const newVideoInfo =axios.post('http://localhost:9000/YouTubeAPI/channel/searchNewVideo', {
      channelId: item
    })
    .then( res => {
      return (res.data)
    })
    console.log(newVideoInfo)
    
    // localStorage 資料
    let channelData = localStorage.getItem(item);
    channelData = JSON.parse(channelData);
    
    // 最新影片跟 local 資料比對，若最新影片跟 local 不同，代表是沒看過的影片，加入播放清單
    if ( channelData.videoId !== newVideoInfo.videoId ) {
      videoItemArray.push(<VideoItem data={ channelData } key={ item }/>)
    }
  });

  return (
    <StyleVideoBarDiv>
      { videoItemArray }
    </StyleVideoBarDiv>
  )};

export default VideoBar;