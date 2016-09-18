import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../util/marker_manager';

const _getCoordsObj = function(latLng) {
  return ({
    lat: latLng.lat(),
    lng: latLng.lng()
  });
};


class BenchMap extends React.Component {

  componentDidMount () {
    const mapDOMNode = this.refs.map;
    const mapCenter = { lat: 37.7758, lng: -122.431297 };
    const mapOptions = {
      center: mapCenter,
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  _registerListeners() {
    let that = this;
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      that.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  _handleClick(coords) {
    this.props.router.push({
      pathname: "benches/new",
      query: coords
    });
  }

  render() {
    return (
      <div id='map-container' ref='map'>
      </div>
    );
  }
}
export default withRouter(BenchMap);
