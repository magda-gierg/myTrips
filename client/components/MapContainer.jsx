import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// ...

export class MapContainer extends React.Component {

  render() {
    return (
      <Map google={this.props.google}
        style={{width: '50%', height: '80%', position: 'relative'}}
        className={'map'}
        zoom={14}>
      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: 37.778519, lng: -122.405640}} />
      <Marker
        name={'Dolores park'}
        position={{lat: 37.759703, lng: -122.428093}} />
      <Marker />

    </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAWdsnn5Lk46dpaEhyZpGw6JXdbGTfvuWo')
})(MapContainer)
