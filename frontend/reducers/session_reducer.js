import SessionActions from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {user:{}, errors:[]};
const SessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SessionActions.RECEIVE_CURRENTUSER:
      const newState =  {user: action.user};
      return merge({}, defaultState, newState);
    case SessionActions.RECEIVE_ERRORS:
      return merge({}, defaultState, {errors: action.errors});
    case SessionActions.LOGOUT:
      return merge({}, defaultState);
    default:
      return state;
  }
};

export default SessionReducer;
