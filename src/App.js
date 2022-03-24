import React, {useState, useEffect} from 'react'
import EmbedPlayer from './components/videoPlayer/EmbedPlayer';
import SideBar from './components/sideBar/SideBar';
// css
import { AppStyle } from './style';

function App() {

  return (
    <AppStyle className="App">
      <SideBar/>
      <EmbedPlayer/>
    </AppStyle>
  );
}

export default App;
