import axios from "axios";

const changeHomeData = (result) => ({
  type: 'change_home_data',
  topicList: result.topicList,
  articleList: result.articleList,
  recomendList:result.recomendList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    });
  }
}

