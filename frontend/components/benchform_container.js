import { connect } from 'react-redux';
import BenchForm from './benchform';
import BenchActions from '../actions/bench_actions';
import FilterActions from '../actions/filter_actions';

const mapStateToProps = ( state, ownProps ) => ({
  lat: ownProps.location.query.lat,
  lng: ownProps.location.query.lng
});

const mapDispatchToProps = dispatch => ({
    createBench: (bench) => dispatch(BenchActions.createBench(bench))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);
