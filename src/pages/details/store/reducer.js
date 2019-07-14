import { fromJS } from "immutable";
import { constants } from "../store";

const defaultState = fromJS({
  title: '',
  content: ''
});
export default (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_DETAIL: 
      return state.merge({
        title: fromJS( action.title ),
        content: fromJS(action.content)
      })
    default:
      return state;
  }
};
