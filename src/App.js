import React, { Component } from 'react';
import {GlobalStyled} from './style.js';
import {Provider} from 'react-redux';
import {IconfontStyled} from './statics/iconfonts/iconfont';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header/index';
import store from "./store/index.js";
import Home from './pages/home/index.js';
import Detail from './pages/details/index.js';

class App extends Component {
  render() {
    return (
      <div className='App'> 
        <GlobalStyled />
        <IconfontStyled />
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path="/" exact component = {Home} /> 
                <Route path="/detail" exact component = {Detail} /> 
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
