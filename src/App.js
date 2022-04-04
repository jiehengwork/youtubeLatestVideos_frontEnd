import React from 'react'
import EmbedPlayer from './components/videoPlayer/EmbedPlayer';
import SideBar from './components/sideBar/SideBar';
import VideoBar from './components/videoBar/VideoBar';
// css
import { StyleAppDiv, StyleViewDiv } from './style';

function App() {

  if (localStorage.getItem('subscriptArray') === null) {
    let subscriptArrayStr = ''
    localStorage.setItem('subscriptArray',subscriptArrayStr)
  }

  return (
    <StyleAppDiv className="App">
      <StyleViewDiv>
        <SideBar/>
        <EmbedPlayer/>
      </StyleViewDiv>
      <VideoBar/>
    </StyleAppDiv>
  );
}

export default App;