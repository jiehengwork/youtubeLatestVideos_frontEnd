import React, { useState, useEffect } from 'react';
import { apiNewVideo } from '../../api/api'; // api
import { StyleVideoBarDiv, PreviewDiv } from './style'; // css
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
  const updateArray = useSelector( state => state.updateArrayReducer.updateArray); // 有新影片的頻道列表
  const [ videoItemArray, setVideoItemArray ] = useState( [] ); // 子元件列表
  const opened = useSelector( state => state.previewReducer.preview ) // 預覽模式
  
  useEffect(() => {
    let array = [] // 暫存陣列
    
    const checkNewVideo = async( item ) => { // 檢查頻道是否有新影片
      let localChannelDataStr = localStorage.getItem(item); // localStorage 儲存的舊資料
      let localChannelData = JSON.parse(localChannelDataStr);
      let channelId = localChannelData.channelId
      let lastUpdateTime = localChannelData.lastUpdateTime;
      const nowUpdateTime = (new Date()).valueOf();

      if ( ( nowUpdateTime - lastUpdateTime ) > 28800000 ) { // 每 8 小時更新一次資料 ( 節省 YouTube API 的配額 ), 不到 8 小時就回傳之前的結果
        await apiNewVideo({ // call API 取得頻道最新影片資訊
          channelId: item
        })
        .then( res => {
          if ( localChannelData.seen !== res.data.videoId ) { // 最新影片跟舊資料比對，若最新影片跟看過的影片(seen) 不同，代表是新的影片 加入更新清單
            array.push( channelId ) // 將有新影片的 頻道ID 加入陣列
            
            // 更新 localStorage 的資料
            localChannelData.videoId = res.data.videoId
            localChannelData.videoTitle = res.data.videoTitle
            localChannelData.videoSmallImg = res.data.videoSmallImg
            localChannelData.videoMediumImg = res.data.videoMediumImg
            localChannelData.videoBigImg = res.data.videoBigImg
  
            // 紀錄最後更新時間
            localChannelData.lastUpdateTime = nowUpdateTime.toString()
            localChannelDataStr = JSON.stringify( localChannelData )
            localStorage.setItem( item, localChannelDataStr )        
          }
        })
      } else {
        if ( localChannelData.seen !== localChannelData.videoId ) {
          array.push( channelId ) // 將有新影片的 頻道ID 加入陣列
        }
      }
      
    }

    const checkAll = ( async() => { // 對所有訂閱的頻道做最新影片檢查 ( IIFE )
      if ( subscriptArray.length !== 0 ) {
        await asyncForEach( subscriptArray, checkNewVideo )
      } else { // 如果訂閱列表是空的
        updateArrayDispatch({ // 清空更新列表
          type: 'UP_CLEAR',
        })
      }

      // 檢查完所有訂閱頻道，將有新影片的頻道列表更新
      updateArrayDispatch({
        type: 'UP_UPDATE',
        payload: { newArray: array }
      })
    })()

  }, [ updateArrayDispatch, subscriptArray ])


  useEffect(() => {
    setVideoItemArray( [] )
    const creatBar = ( item ) => {
      let itemData = localStorage.getItem( item )
      itemData = JSON.parse(itemData);
      if ( itemData !== null ) {
          let videoItem = <VideoItem data={ itemData } key={ item }/>
          setVideoItemArray( current =>  [ ...current, videoItem ] )
          let arrayStr = updateArray.join(',')
          localStorage.setItem( 'lastUpdateArray', arrayStr ) 
      }
    }

    asyncForEach( updateArray, creatBar )
    }, [ updateArray ])

  // 預覽模式
  let preview = []
  for (let i = 0; i < 30; i++) {
    preview.push(<PreviewDiv>預覽用佔位元素</PreviewDiv>)
  }

  return (
    <StyleVideoBarDiv>
      { videoItemArray }
      { opened && preview }
    </StyleVideoBarDiv>
  )
};

export default VideoBar;