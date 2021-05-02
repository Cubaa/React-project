import  React from 'react';
import {AsideMenu} from './components/AsideMenu/AsideMenu';
import {MainPage} from './components/MainPage/MainPage'
import {Provider} from 'react-redux'
import store from './tools/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


import './App.css';
library.add(fab, faCheckSquare, faCoffee, fas, far)

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
