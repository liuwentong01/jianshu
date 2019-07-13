import React, { Component } from "react";
import List from './components/List.js';
import Recomend from "./components/Recomend.js";
import Topic from "./components/Topic.js";
import Writer from "./components/Writer.js";
import {connect} from 'react-redux';
import {HomeWrapper, HomeLeft, HomeRight} from "./style.js";
import {actionCreators} from './store';
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4679/5570c9de5caff87a2ae4509d2b61d936fa974816.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="无法显示" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recomend />
          <Writer />
        </HomeRight>  
      </HomeWrapper>
    )
  }
  componentDidMount(){
      this.props.changeHomeData();
  }

}
  const mapDispatch = (dispatch) => ({
    changeHomeData(){
      const action = actionCreators.getHomeInfo();
      dispatch(action);
    }
  })

export default connect(null, mapDispatch)(Home);
