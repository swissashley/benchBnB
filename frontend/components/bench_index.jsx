import React from 'react';

class BenchIndex extends React.Component {

  constructor({props}) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBenches();
  }
  render() {
    return (
      <ul>
        {this.props.benches.map( (bench) => {
          return (
            <li key={`${bench.lat}${bench.lng}`}>{bench.description}</li>
          );
        })}
      </ul>
    );
  }

}

export default BenchIndex;
