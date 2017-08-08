import React from "react";
import { Route, Switch } from "react-router-dom";
import Places from "./Places";
import Place from "./Place";
import PlaceForm from "./PlaceForm";
import MapContainer from "./MapContainer";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              <Places
                places={this.props.places}
                fetchPlaces={this.props.fetchPlaces}
                deletePlace={this.props.deletePlace}
              />}
          />

          <Route
            path="/places/new"
            render={props =>
              <PlaceForm fetchPlaces={this.props.fetchPlaces} {...props} />}
          />
          <Route
            path="/places/:id"
            render={props =>
              <Place
                key={props.match.params.id}

                place={this.props.places.find(
                  place => place.id === Number(props.match.params.id)
                )}
              />}
          />
          <Route
            exact
            path="/map"
            render={props =>
              <MapContainer
                places={this.props.places} loaded={true} google={window.google}

              />}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes
