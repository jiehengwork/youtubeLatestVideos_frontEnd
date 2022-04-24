import React, { useState, useEffect } from "react";
// css
import { EmbedVideoContainer,AutoHeightDiv, StyleIframe, OptionDiv } from "./style";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// redux
import { useSelector, useDispatch } from 'react-redux';

const EmbedPlayer = () => {

  const updateArrayDispatch = useDispatch();

  const [ videoId, setVideoId ] = useState('');
  const [ channelId, setChannelId ] = useState('');
  const [ videoTitle, setVideoTitle ] = useState('');

  // 隨 updateArray 改變主畫面的影片
  const updateArray = useSelector( state => state.updateArray )
  useEffect(() => {
    if ( updateArray.length !== 0 ) {
      setChannelId( updateArray[0] )
      let firstChannel = updateArray[0];
      let data = JSON.parse(localStorage.getItem(firstChannel));
      setVideoId( data.videoId );
      setVideoTitle( data.videoTitle );
    }
  }, [ updateArray ])
  
  useEffect(() => {
    window.YT.ready(() => {
      new window.YT.Player('EmbedVideo', {
        events: {
          'onStateChange': function(event) {
            // 影片播放完畢後
            if (event.data === window.YT.PlayerState.ENDED) {
              // 更新 subscriptArray 移除撥放完的 channelId
              updateArrayDispatch({
                type: 'DELETE_ITEM',
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

  const deleteVideoHandler = () => {
    // 更新 subscriptArray 移除撥放完的 channelId
    updateArrayDispatch({
      type: 'DELETE_ITEM',
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
    'margin-right': '1vw'
  }

  return (
    <EmbedVideoContainer>
      <AutoHeightDiv>
        { ( videoId !== '' ) ? <StyleIframe title="EmbedVideo" id="EmbedVideo" src={"https://www.youtube.com/embed/"+ videoId +"?enablejsapi=1"}></StyleIframe> : null }
      </AutoHeightDiv>
      <OptionDiv>
        <p>{ ( videoId !== '' ) ? videoTitle : "尚無新影片!" }</p>
        <button onClick={ deleteVideoHandler }><FontAwesomeIcon icon={ faTrashCan } style={ iconStyle }/>把此影片從列表中刪除</button>
      </OptionDiv>
    </EmbedVideoContainer>
  );
}
export default EmbedPlayer;