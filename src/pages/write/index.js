import React, { PureComponent } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

class Write extends PureComponent {
  render() {
    if (this.props.loginStatus) {
      return <div>写文章</div>;
    } 
    else{
      return <Redirect to='/login' />
      //可以用Link吗
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.get('login').get('login')
})
export default connect(mapState, null)(Write);
