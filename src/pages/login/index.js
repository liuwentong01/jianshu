import React, { PureComponent } from "react";
//import { actionCreators } from "./store";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号'/>
          <Input placeholder='密码'/>
          <Button >提交</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}


const mapDispatch = dispatch => ({

});
export default connect(null, mapDispatch)(Login);
