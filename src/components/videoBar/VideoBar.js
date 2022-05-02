import React, { useEffect } from 'react';
import { apiNewVideo } from '../../api/api'; // api
import { StyleVideoBarDiv } from './style'; // css
import { useSelector, useDispatch }  from 'react-redux'; // redux
import VideoItem from "./videoItem/VideoItem";

async function asyncForEach( array, callback ) { // 「同步」迴圈
  for( let i = 0; i < array.length; i++ ) {
    await callback(array[i]);
  }
}

const VideoBar = () => {
  const updateArrayDispatch = useDispatch();
  const subscriptArray = useSelector( state => state.subscriptArrayReducer.subscriptArray); // 從 Redux 取得訂閱頻道列表
  
  useEffect(() => {
    let array = [] // 暫存陣列

    const checkNewVideo = async( item ) => { // 檢查頻道是否有新影片
      await apiNewVideo({ // call API 取得頻道最新影片資訊
        channelId: item
      })
      .then( res => {
        let localChannelData = localStorage.getItem(item); // localStorage 儲存的舊資料
        localChannelData = JSON.parse(localChannelData);
        
        if ( localChannelData.seen !== res.data.videoId ) { // 最新影片跟舊資料比對，若最新影片跟看過的影片(seen) 不同，代表是新的影片 加入更新清單
          let channelId = localChannelData.channelId
          array.push( channelId ) // 將有新影片的 頻道ID 加入陣列
          
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

    const checkAll = ( async() => { // 對所有訂閱的頻道做最新影片檢查 ( IIFE )
      if ( subscriptArray.length !== 0 ) {
        await asyncForEach( subscriptArray, checkNewVideo )
      } else { // 如果訂閱列表是空的
        updateArrayDispatch({ // 清空更新列表
          type: 'UP_UPDATE',
          payload: { newArray: array }
        })
      }

      // 檢查完所有訂閱頻道，將有新影片的頻道列表更新
      updateArrayDispatch({
        type: 'UP_UPDATE',
        payload: { newArray: array }
      })
    })()
    
  }, [ updateArrayDispatch, subscriptArray ])

  const updateArray = useSelector( state => state.updateArrayReducer.updateArray); // 有新影片的頻道列表

  let videoItemArray = updateArray.map( item => {
    let itemData = localStorage.getItem( item )
    itemData = JSON.parse(itemData);
    if ( itemData !== null ) {
      return <VideoItem data={ itemData } key={ item }/>
    } else {
      return null
    }
  })

  return (
    <StyleVideoBarDiv>
      { videoItemArray }
    </StyleVideoBarDiv>
  )
};

export default VideoBar;