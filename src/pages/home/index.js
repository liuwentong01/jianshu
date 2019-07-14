import React, { PureComponent } from "react"; //使用immutable.js配合PureComponent没有问题，如果不使用immutable.js，PureComponent可能有坑
import List from './components/List.js';
import Recomend from "./components/Recomend.js";
import Topic from "./components/Topic.js";
import Writer from "./components/Writer.js";
import {connect} from 'react-redux';
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from "./style.js";
import {actionCreators} from './store';

class Home extends PureComponent { //PureComponent避免不必要的加载（如果store数据的改变与当前组件无关，则render函数不会重新渲染）
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4679/5570c9de5caff87a2ae4509d2b61d936fa974816.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="无法显示"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recomend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop.bind(this)}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow(e){
    if(document.documentElement.scrollTop > 200){
      dispatch(actionCreators.toggleTopShow(true));
    } else{
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});
const mapState = (state) => ({
  showScroll: state.get('home').get('showScroll')
})

export default connect(mapState, mapDispatch)(Home);
