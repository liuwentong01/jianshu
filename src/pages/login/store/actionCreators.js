import axios from 'axios';
import {constants} from '../store';
const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  state: true
})
export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account +'&password=' + password).then((res) => {
      const state = res.data.state;
      if(state){
        dispatch(changeLogin())
      } else{
        alert('登陆失败');
      }
    })
  }
}

export const logOut = () => ({
  type: constants.CHANGE_LOGOUT,
  state: false
})

