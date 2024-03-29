import React, {Component} from 'react';
import { CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actionCreators}  from './store' ;
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTittle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addtion,
  Button,
  SearchWrapper,
} from './style';

class Header extends Component{

  getInfoList (){
    const {focused, list, totalPage, page, mouseIn, handleMouseEnter, handleMouseLeave, handlePageChange} = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if(jsList.length){
      for(let i=(page-1)*10; i<page*10; i++){
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
      <SearchInfo 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <SearchInfoTittle>
          热门搜索
          <SearchInfoSwitch onClick={() => {handlePageChange(page, totalPage, this.spinIcon)}}>
            <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTittle>
        <SearchInfoList>
          {pageList} 
        </SearchInfoList>
      </SearchInfo>
      );
    } else if(!this.props.mouseIn)
        return null;
   
  }

  render(){
    const {focused, handleFocusChange, handleBlurChange, list, login}  = this.props;
    return(
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {
            login ? <NavItem className="right" onClick={this.props.logOut}>退出</NavItem> : 
            <Link to='/login'><NavItem className="right">登陆</NavItem></Link>
          }
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>

          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={2000}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => {handleFocusChange(list)}}
                onBlur={handleBlurChange}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6e4;</i>
            {this.getInfoList()}
          </SearchWrapper>

          <Addtion>
            <Link to="/write">
              <Button className="writting">
                <span className="iconfont">&#xe61b;</span>
                写文章
              </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addtion>
        </Nav>
      </HeaderWrapper >
    )
  }

}


const mapStateToProps = (state)=>{
  return {
    focused: state.get('header').get('focused'),
    mouseIn: state.get('header').get('mouseIn'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
    login: state.get('login').get('login'),
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handleFocusChange(list){
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleBlurChange(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    handlePageChange(page, totalPage, spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle){
        originAngle = parseInt(originAngle, 10);
      }else{
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if(page < totalPage)
        page += 1;
      else 
        page = 1;
      dispatch(actionCreators.pageChange(page));
    },
    logOut(){
      dispatch(loginActionCreators.logOut());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);