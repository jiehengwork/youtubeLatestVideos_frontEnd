import React, {useEffect} from "react";
// css
import { AutoHeightDiv, StyleIframe } from "./style";

let videoId = 'Sh4Og11zDyM';

const EmbedPlayer = () => {

  // 影片播放完畢後 取得下一部影片ID
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(tag, firstScript);

      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player('EmbedVideo', {
          events: {
            'onStateChange': function(event) {
              if (event.data === window.YT.PlayerState.ENDED) {
                console.log("end");
              }
            }
          }
        });
      }
    }
  }, [])

  return (
    <AutoHeightDiv>
      <StyleIframe title="EmbedVideo" id="EmbedVideo" src={"https://www.youtube.com/embed/"+ videoId +'?enablejsapi=1'}></StyleIframe>
    </AutoHeightDiv>
  );
}
export default EmbedPlayer;