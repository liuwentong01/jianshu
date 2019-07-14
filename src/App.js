import React, { Component } from 'react';
import {GlobalStyled} from './style.js';
import {Provider} from 'react-redux';
import {IconfontStyled} from './statics/iconfonts/iconfont';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header/index';
import store from "./store";
import Home from './pages/home';
import Detail from './pages/details';
import Login from './pages/login';
import Write from './pages/write';

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
              <Route path="/write" exact component={Write} />
              {/* 动态路由 */}
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
