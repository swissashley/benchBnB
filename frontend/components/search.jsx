import React from 'react';
import { withRouter } from 'react-router';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({benches, requestBenches, updateFilter}) => (
  <div>
    <div className='left-half'>
      <h1>Click Map to Add Bench!</h1>
      <BenchMap benches={benches} updateFilter={updateFilter}/>
    </div>
    <div className='right-half'>
      <BenchIndex benches={benches} requestBenches={requestBenches}/>
    </div>
  </div>
);

export default Search;
