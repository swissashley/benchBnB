import FilterActions from '../actions/filter_actions';
import merge from 'lodash/merge';

const defaultState = {bounds:{}};
const FilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FilterActions.UPDATE_FILTER:
      const newState =  {[action.filter]: action.value};
      console.log('UPDATE_FILTER');
      console.log(newState);
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default FilterReducer;
