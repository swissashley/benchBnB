import BenchActions from '../actions/bench_actions';
import FilterActions from '../actions/filter_actions';
import { fetchBenches, receiveBenches, createBench, fetchBench, receiveBench } from '../util/bench_api_util';
const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  const requestBenchesOnSuccess = (benches) => {
    dispatch(BenchActions.receiveBenches(benches));
  };
  const receiveBenchOnSuccess = (bench) => {
    dispatch(BenchActions.receiveBench(bench));
  };
  switch(action.type){
    case BenchActions.REQUEST_BENCHES: {
      console.log('Middleware - REQUEST_BENCHES:');
      console.log(getState().bounds);
      const filters = getState().filters;
      fetchBenches(filters, requestBenchesOnSuccess);
      return next(action);
    }

    case FilterActions.UPDATE_FILTER: {
      console.log('Middleware - UPDATE_FILTER: ');
      // dispatch(Actions.requestBenches());
      return next(action);
    }

    case BenchActions.CREATE_BENCH: {
      console.log("Middleware - CREATE_BENCH");
      const bench = action.bench;
      createBench(bench, receiveBenchOnSuccess);
      return next(action);
    }

    case BenchActions.REQUEST_BENCH: {

      return next(action);
    }

    default:
      return next(action);
  }
};


export default BenchesMiddleware;
