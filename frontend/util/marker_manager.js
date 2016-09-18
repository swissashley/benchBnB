class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];

    this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(benches){
    console.log("updating markers...");
    this.benches = benches;
    this._benchesToAdd().forEach(this._createMarkerFromBench);
  }

  _benchesToAdd() {
    let existingMarkerIds = this.markers.map( marker =>{
      return marker.benchId;
    });
    const newBenches = [];
    this.benches.forEach(bench => {
      if (!existingMarkerIds.includes(bench.id)){
        newBenches.push(bench);
      }
    });
    return newBenches;
  }

  _createMarkerFromBench(bench) {
    const pos = {lat: bench.lat, lng: bench.lng};
    const benchId = bench.id;
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      benchId: benchId
    });
    this.markers.push(marker);
  }

  _removeMarker() {

  }

}

export default MarkerManager;
