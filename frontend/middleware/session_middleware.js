import BenchActions from '../actions/bench_actions';
import FilterActions from '../actions/filter_actions';
import SessionActions from '../actions/session_actions';

import { login, logout, signUp } from '../util/session_api_util';
const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const receiveUserOnSuccess = (user) => {
    dispatch(SessionActions.receiveCurrentUser());
  };
  const logoutOnSuccess = () => {
    dispatch(SessionActions.logout());
  };
  const onError = (errors) => {
    dispatch(SessionActions.receiveErrors(errors));
  };
  switch(action.type){
    case SessionActions.LOGIN: {
      login(action.user, receiveUserOnSuccess);
      return next(action);
    }
    case SessionActions.LOGOUT: {
      logout((data) => {console.log(data);},onError);
      return next(action);
    }
    case SessionActions.SIGNUP: {
      signUp(action.user, receiveUserOnSuccess);
      return next(action);
    }

    default:
      return next(action);
  }
};


export default SessionMiddleware;
