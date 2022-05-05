import React from 'react'
import EmbedPlayer from './components/videoPlayer/EmbedPlayer';
import SideBar from './components/sideBar/SideBar';
import VideoBar from './components/videoBar/VideoBar';
import PreviewButton from './components/userAssistance/previewButton/PreviewButton';
import InfoButton from './components/userAssistance/infoButton/InfoButton';
import { StyleAppDiv } from './style'; // css
import { Provider } from 'react-redux'; // redux
import { projectStore } from './redux/store';

function MainApp() {

  if (localStorage.getItem('subscriptArray') === null) {
    let subscriptArrayStr = ''
    localStorage.setItem('subscriptArray',subscriptArrayStr)
  }

  return (
    <Provider store={ projectStore }>
      <StyleAppDiv className="App">
        <SideBar/>
        <EmbedPlayer/>
        <VideoBar/>
        <PreviewButton/>
        <InfoButton/>
      </StyleAppDiv>
    </Provider>
  );
}

export default MainApp;