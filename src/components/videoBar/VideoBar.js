import React, { useState, useEffect } from 'react';
import axios from 'axios';
// component
import VideoItem from "./videoItem/VideoItem";
// css
import { StyleVideoBarDiv } from './style';

// 「同步」處理迴圈
async function asyncForEach( array, callback ) {
  for( let i = 0; i < array.length; i++ ) {
    await callback(array[i]);
  }
}

const VideoBar = () => {
  // 有新影片的頻道清單
  const [ updateArray, setUpdateArray ] = useState([]);
  console.log('render')

  useEffect(() => {
    // 從 localhost 中取出 訂閱的頻道清單
    const subscriptArrayStr = localStorage.getItem('subscriptArray');
    const subscriptArray = subscriptArrayStr.split(',')
    subscriptArray.splice(0, 1);
    
    // 暫存陣列
    let array = []
    // 檢查頻道是否有新影片
    const checkNewVideo = async(item) => {
      // 取得頻道最新影片資訊
      await axios.post('http://localhost:9000/YouTubeAPI/channel/searchNewVideo', {
        channelId: item
      })
      .then( res => {
        // localStorage 儲存的舊資料
        let localChannelData = localStorage.getItem(item);
        localChannelData = JSON.parse(localChannelData);
        
        // 最新影片跟舊資料比對，若最新影片跟看過的影片(seen) 不同，代表是新的影片 加入更新清單
        if ( localChannelData.seen !== res.data.videoId ) {
          let channelId = localChannelData.channelId
          array.push( channelId )
          
          // 更新 localStorage 的資料
          localChannelData.videoId = res.data.videoId
          localChannelData.videoTitle = res.data.videoTitle
          localChannelData.videoSmallImg = res.data.videoSmallImg
          localChannelData.videoMediumImg = res.data.videoMediumImg
          localChannelData.videoBigImg = res.data.videoBigImg
          localChannelData = JSON.stringify( localChannelData )
          localStorage.setItem( item, localChannelData )
        }
      })
    }

    // 對所有訂閱的頻道做最新影片檢查 (同步 避免多次重新渲染)
    const checkAll = (async() => {
      await asyncForEach( subscriptArray, checkNewVideo )
      setUpdateArray( array )
    })()

  }, [])
  
  let videoItemArray = updateArray.map( item => {
    let itemData = localStorage.getItem( item )
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