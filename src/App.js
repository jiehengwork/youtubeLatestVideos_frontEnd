import React from 'react'
import EmbedPlayer from './components/videoPlayer/EmbedPlayer';
import SideBar from './components/sideBar/SideBar';
import VideoBar from './components/videoBar/VideoBar';
import { StyleAppDiv } from './style'; // css
import { Provider } from 'react-redux'; // redux
import { projectStore } from './redux/store';

function App() {

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
      </StyleAppDiv>
    </Provider>
  );
}

export default App;