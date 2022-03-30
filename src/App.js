import React, { useEffect } from 'react'
import EmbedPlayer from './components/videoPlayer/EmbedPlayer';
import SideBar from './components/sideBar/SideBar';
// css
import { AppStyle } from './style';

function App() {

  if (localStorage.getItem('subscriptArray') === null) {
    let subscriptArrayStr = ''
    localStorage.setItem('subscriptArray',subscriptArrayStr)
  }

  return (
    <AppStyle className="App">
      <SideBar/>
      <EmbedPlayer/>
    </AppStyle>
  );
}

export default App;