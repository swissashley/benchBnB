import React from 'react';
import { withRouter } from 'react-router';

class BenchForm extends React.Component {

  constructor(props) {
    super(props);
    this.coords = {lat: props.lat, lng: props.lng};
    this.state = {
      description: "",
      seating: 2
    };
    this.update = this.update.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  submitForm(e) {
    e.preventDefault();
    const bench = Object.assign({}, this.state, this.coords);
    this.props.createBench({bench});
    this.navigateToSearch();
  }

  navigateToSearch() {
    this.props.router.push("/");
  }

  render () {

    return (
      <form className='bench-form' onSubmit={this.submitForm}>
        <label>Description:
          <input type="text"
            name='description'
            onChange={this.update("description")}
            value={this.state.description}></input>
        </label>
        <label>Seatings:
          <input type='texta'
            onChange={this.update("seating")}
            name='seating'
            value={this.state.seating}></input>
        </label>
        <label>Lat:
          <input type='number' disabled name='lat' value={this.coords.lat}></input>
        </label>
        <label>Lng:
          <input type='number' disabled name='lng' value={this.coords.lng}></input>
        </label>
        <input type='submit' value='Create Bench'></input>
      </form>
    );
  }
}

export default withRouter(BenchForm);
