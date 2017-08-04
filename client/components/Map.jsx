import React from 'react'

export class Map extends React.Component {
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }
  loadMap() {
      if (this.props && this.props.google) {
        // ...
        const {lat, lng} = this.state.currentLocation;
      }
      // ...
    }
  }
