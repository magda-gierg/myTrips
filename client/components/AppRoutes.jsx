import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Places from './Places'
import Place from './Place'
import PlaceForm from './PlaceForm'

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) =>
              <Places places={this.props.places} fetchPlaces={this.props.fetchPlaces}
                {...props}/>}/>

          <Route path='/places/new' render={(props) =>
              <PlaceForm fetchPlaces={this.props.fetchPlaces} {...props}/>}/>
          <Route path='/places/:id' render={(props) =>
              <Place key={props.match.params.id} fetchPlaces={this.props.fetchPlaces} place={this.props.places.find((place) =>
                  place.id === Number(props.match.params.id))} {...props}/>}/>

        </Switch>
      </div>
    )
  }
}

export default Routes
