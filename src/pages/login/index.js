import React, { PureComponent } from "react";
import { Redirect } from 'react-router-dom';
import { actionCreators } from "./store";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";

class Login extends PureComponent {
  render() {
    if(!this.props.loginStatus){
      return (
        <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' ref={(input) => {this.account = input} }/>
          <Input placeholder='密码' type="password" ref={(input) => {this.password = input} }/>
          <Button onClick={()=>this.props.login(this.account.value, this.password.value)}>提交</Button>
        </LoginBox>
        </LoginWrapper>
      );  
    } else{
      return <Redirect to='/' />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.get('login').get('login')
})
const mapDispatch = (dispatch) => ({
  login(accountItem, passwordItem){
    dispatch(actionCreators.login(accountItem, passwordItem));
  }
});
export default connect(mapState, mapDispatch)(Login);
