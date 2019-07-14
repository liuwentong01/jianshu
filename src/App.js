import React, { Component } from 'react';
import {GlobalStyled} from './style.js';
import {Provider} from 'react-redux';
import {IconfontStyled} from './statics/iconfonts/iconfont';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header/index';
import store from "./store/index.js";
import Home from './pages/home/index.js';
import Detail from './pages/details/index.js';
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyled />
        <IconfontStyled />
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/detail:id" exact component={Detail} />
              {/* 动态路由 */}
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
