import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Routes, Route} from "react-router-dom";
import './index.css';
import MainApp from './MainApp';
import InfoPage from './components/infoPage/InfoPage';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <MainApp/> } />
        <Route path='/info' element={ <InfoPage/> } />
      </Routes>
    </HashRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);