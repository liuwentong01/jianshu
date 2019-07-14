import { fromJS } from "immutable";
import {constants} from '../store';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recomendList: [],
  articlePage:1,
  showScroll: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recomendList: fromJS(action.recomendList)
      });
    case constants.ADD_HOME_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(fromJS(action.list)),
        articlePage: fromJS(action.nextPage)
      });
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
};
