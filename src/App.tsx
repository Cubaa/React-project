import  React from 'react';
import {AsideMenu} from './components/AsideMenu/AsideMenu';
import {MainPage} from './components/MainPage/MainPage'
import {Provider} from 'react-redux'
import store from './tools/store'

import './App.css';


function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <MainPage />
        </Provider>
    </div>
  );
}

export default App;
