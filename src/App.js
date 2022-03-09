import React, {useState, useEffect} from 'react'
import EmbedPlayer from './components/EmbedPlayer';
import SideBar from './components/sideBar/SideBar';

function App() {

  return (
    <div className="App">
      <SideBar/>
      <EmbedPlayer/>
    </div>
  );
}

export default App;
