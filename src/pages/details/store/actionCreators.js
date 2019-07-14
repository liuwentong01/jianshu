import axios from 'axios';
import {constants} from '../store';


const changeDetail = data => ({
  type: constants.CHANGE_DETAIL,
  title: data.title,
  content: data.content
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then((res) => {
      const result = res.data.data;
      dispatch(changeDetail(result[0]));
    })
  }
}