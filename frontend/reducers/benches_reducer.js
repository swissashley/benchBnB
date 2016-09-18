import BenchActions from '../actions/bench_actions';
import merge from 'lodash/merge';

const defaultState = {};
const BenchesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case BenchActions.RECEIVE_BENCHES:
      return action.benches;

    case BenchActions.RECEIVE_BENCH:
      const newBench = {[action.bench.id]: action.bench};
      return merge({}, state, newBench);

    default:
      return state;
  }
};

export default BenchesReducer;
