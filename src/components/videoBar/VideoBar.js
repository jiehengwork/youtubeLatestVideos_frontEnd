import React, { useState, useEffect } from 'react';
import axios from 'axios';
// component
import VideoItem from "./videoItem/VideoItem";
// css
import { StyleVideoBarDiv } from './style';

const VideoBar = () => {
  // 有新影片的頻道清單
  const [ updateArray, setUpdateArray ] = useState([]);

  useEffect(() => {
    // 訂閱的頻道清單
    const subscriptArrayStr = localStorage.getItem('subscriptArray');
    const subscriptArray = subscriptArrayStr.split(',')
    subscriptArray.splice(0, 1);

    subscriptArray.forEach( item => {
      // 取得頻道最新影片資訊
      axios.post('http://localhost:9000/YouTubeAPI/channel/searchNewVideo', {
        channelId: item
      })
      .then( res => {
        // localStorage 資料
        let localChannelData = localStorage.getItem(item);
        localChannelData = JSON.parse(localChannelData);
        
        // 最新影片跟 local 資料比對，若最新影片跟 看過的影片(seen) 不同，代表是沒看過的影片
        if ( localChannelData.seen !== res.data.videoId ) {
          let channelId = localChannelData.channelId
          setUpdateArray( current => [ ...current, channelId] )
          
          // 紀錄等等要渲染的影片ID
          localChannelData.videoId = res.data.videoId
          localChannelData.videoTitle = res.data.videoTitle
          localChannelData.videoSmallImg = res.data.videoSmallImg
          localChannelData.videoMediumImg = res.data.videoMediumImg
          localChannelData.videoBigImg = res.data.videoBigImg
          localChannelData = JSON.stringify(localChannelData)
          localStorage.setItem(item, localChannelData)
        }
      })
    })
  }, [])
  
  let videoItemArray = updateArray.map( item => {
    let itemData = localStorage.getItem(item)
    itemData = JSON.parse(itemData);
    return <VideoItem data={ itemData } key={ item }/>
  })

  return (
    <StyleVideoBarDiv>
      { videoItemArray }
    </StyleVideoBarDiv>
  )
};

export default VideoBar;