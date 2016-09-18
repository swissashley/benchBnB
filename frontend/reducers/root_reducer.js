import BenchesReducer from './benches_reducer';
import FilterReducer from './filter_reducer';
import SessionReducer from './session_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  benches: BenchesReducer,
  filters: FilterReducer,
  sessions: SessionReducer
});

export default RootReducer;
