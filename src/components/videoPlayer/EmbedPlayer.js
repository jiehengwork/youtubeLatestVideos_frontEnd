import React, { useState, useEffect } from "react";
// css
import { EmbedVideoContainer,AutoHeightDiv, StyleIframe } from "./style";
// redux
import { useSelector, useDispatch } from 'react-redux';

const EmbedPlayer = () => {

  const updateArrayDispatch = useDispatch();

  const [ videoId, setVideoId ] = useState('');
  const [ channelId, setChannelId ] = useState('');

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(tag, firstScript);
      
      window.onYouTubeIframeAPIReady = () => {
        console.log('test')
        new window.YT.Player('EmbedVideo', {
          events: {
            'onStateChange': function(event) {
              // 影片播放完畢後 更新 subscriptArray
              console.log('test')
              if (event.data === window.YT.PlayerState.ENDED) {
                console.log('test1')
                updateArrayDispatch({
                  type: 'DELETE_ITEM',
                  payload: { item: channelId }
                })
                console.log('test2')
              }
            }
          }
        });
      }
    }
  }, [])

  // 隨 updateArray 改變主畫面的影片
  const updateArray = useSelector( state => state.updateArray )
  useEffect(() => {
    if ( updateArray.length !== 0 ) {
      setChannelId( updateArray[0] )
      let firstChannel = updateArray[0];
      let data = JSON.parse(localStorage.getItem(firstChannel));
      setVideoId(data.videoId);
    }
  }, [ updateArray ])

  return (
    <EmbedVideoContainer>
      <AutoHeightDiv>
        <StyleIframe title="EmbedVideo" id="EmbedVideo" src={"https://www.youtube.com/embed/"+ videoId +'?enablejsapi=1'}></StyleIframe>
      </AutoHeightDiv>
    </EmbedVideoContainer>
  );
}
export default EmbedPlayer;