import { connect } from 'react-redux';
import Search from './search';
import BenchActions from '../actions/bench_actions';
import FilterActions from '../actions/filter_actions';

const mapStateToProps = state => ({
    benches: state.benches
});

const mapDispatchToProps = dispatch => ({
    requestBenches: () => dispatch(BenchActions.requestBenches()),
    updateFilter: (filters, value) => dispatch(FilterActions.updateFilter(filters, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
