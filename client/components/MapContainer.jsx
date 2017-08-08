import React from 'react'
import {Map, InfoWindow, Marker} from 'google-maps-react';


class MapContainer extends React.Component {
  constructor (props) {
    super(props)

  }
  render() {
    return (
      <Map google={this.props.google}
        style={{width: '95%', height: '85%', position: 'relative', margin: '10px'}}
        className={'map'}
        zoom={6}
        initialCenter={{
            lat: -36.8547512,
            lng: 174.7787425
          }}
          >
          {this.props.places.map((place, key) => {
            const id = place.id.toString();
            return (
      <Marker
        key = {key}
        title={place.place}
        name={'SOMA'}
        position={{lat: Number(place.lat), lng: Number(place.lng)}} />
    )
  })}
    </Map>
    );
  }
}

export default MapContainer


// https://github.com/fullstackreact/google-maps-react/blob/master/README.md
