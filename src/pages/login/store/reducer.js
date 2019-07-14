import { fromJS } from "immutable";
import { constants } from "../store";

const defaultState = fromJS({
  login: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.state);
    case constants.CHANGE_LOGOUT:
      return state.set("login", action.state);
    default:
      return state;
  }
};
