import React, { useState, useEffect } from "react";
import { EmbedVideoContainer,AutoHeightDiv, StyleIframe, StyleDiv, OptionDiv } from "./style"; // css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // font awesome
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"; // font awesome
import { useSelector, useDispatch } from 'react-redux'; // redux

const EmbedPlayer = () => { // 在主畫面顯示 有新影片的頻道列表 的第一個頻道的影片
  const updateArrayDispatch = useDispatch();

  const [ videoId, setVideoId ] = useState('');
  const [ channelId, setChannelId ] = useState('');
  const [ videoTitle, setVideoTitle ] = useState('');

  const updateArray = useSelector( state => state.updateArrayReducer.updateArray ) // 有新影片的頻道列表

  useEffect(() => { // 列表更新就重新渲染列表的第一個頻道的影片
    if ( updateArray.length !== 0 ) {
      let firstChannel = updateArray[0];
      let data = JSON.parse(localStorage.getItem(firstChannel));
      setChannelId( updateArray[0] )
      setVideoId( data.videoId );
      setVideoTitle( data.videoTitle );
    }
  }, [ updateArray ])
  
  useEffect(() => { // 每次渲染 監聽 YouTube 嵌入影片的播放狀態
    window.YT.ready(() => { // YouTube JS 檔載入完成
      new window.YT.Player('EmbedVideo', {
        events: {
          'onStateChange': function(event) { // 當播放狀態改變
            if (event.data === window.YT.PlayerState.ENDED) { // 當狀態為撥放完畢
              updateArrayDispatch({ // 更新 有新影片的頻道列表 移除撥放完的 channelId
                type: 'UP_DELETE_ITEM',
                payload: { item: channelId }
              })

              // 更新 localStorage 中此 channelId 的 seen(看過的影片Id)
              let channelData = localStorage.getItem( channelId )
              channelData = JSON.parse( channelData )
              channelData.seen = videoId
              channelData = JSON.stringify( channelData )
              localStorage.setItem( channelId, channelData )
            }
          }
        }
      });
    })
  })

  const deleteVideoHandler = () => { // 點擊 刪除此影片的按鈕
    updateArrayDispatch({ // 更新 有新影片的頻道列表 移除撥放完的 channelId
      type: 'UP_DELETE_ITEM',
      payload: { item: channelId }
    })

    // 更新 localStorage 中此 channelId 的 seen(看過的影片Id)
    let channelData = localStorage.getItem( channelId )
    channelData = JSON.parse( channelData )
    channelData.seen = videoId
    channelData = JSON.stringify( channelData )
    localStorage.setItem( channelId, channelData )
  }

  const iconStyle = {
    'marginRight': '1vw'
  }
 
  const webInfo = (
    <div>
      <p>第一次造訪此網站，請先在左側邊欄搜尋感興趣的 YouTube 頻道並訂閱。</p>
      <br/>
      <br/>
      <br/>
      <p>關於本網站的詳細功能與介紹，請點擊右上角的「網頁導覽」</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>您訂閱的頻道目前沒有新影片！</p>
    </div>
  )
  


  return (
    <EmbedVideoContainer>
      <AutoHeightDiv>
        { ( videoId !== '' ) ? <StyleIframe title="EmbedVideo" id="EmbedVideo" src={"https://www.youtube.com/embed/"+ videoId +"?enablejsapi=1"}></StyleIframe> : <StyleDiv>{ webInfo }</StyleDiv> }
      </AutoHeightDiv>
      <OptionDiv>
        <p>{ ( videoId !== '' ) ? videoTitle : "尚無新影片!" }</p>
        <button onClick={ deleteVideoHandler }><FontAwesomeIcon icon={ faTrashCan } style={ iconStyle }/>把此影片從清單中刪除</button>
      </OptionDiv>
    </EmbedVideoContainer>
  );
}
export default EmbedPlayer;