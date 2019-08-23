import * as constants from './constants';
import {fromJS} from 'immutable'
import axios from 'axios'

const ChangeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUSED
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER     
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const pageChange = (page) => ({
  type: constants.PAGE_CHANGE,
  page
})

export const getList = ()=>{
  return (dispatch) => {
    axios.get('./api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(ChangeList(data.data));
    }).catch(() => {
      console.log("error");
    });
  }
}