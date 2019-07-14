import axios from "axios";
import {constants} from '../store';
const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recomendList: result.recomendList
});
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    });
  }
}


const addHomeList = (list, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  list: list, //转化为immutable数组,上面的ajax为啥没转化呢
  nextPage
});
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page+1));
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})
