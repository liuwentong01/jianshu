import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic}) ;
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused{
      background: #777;
      color: #fff;
    }
  }
` 

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  font-size: 15px;
  background: #eee;
  color: #666;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition: all 0.5s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all 0.5s ease-out;
  }
  &.slide-exit-active{
    width: 160px
  }
`

export const SearchInfo = styled.div`
  position:absolute;
  left:25px;
  top:60px;
  width:230px;
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  background-color: white;
`
export const SearchInfoTittle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  margin-right: 15px;
  line-height: 20px;
  font-size: 14px;
  color:#969696;
`
export const SearchInfoSwitch = styled.span`
  float:right;
  font-size: 13px;
  cursor: pointer;
  .spin{
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all  .2s  ease-in;
    transform-origin: center center;
  }

`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin: 10px 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`

export const Addtion = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.button`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ea6f5a;
  font-size: 14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
  }
`