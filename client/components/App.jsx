import React from 'react'
import AppRoutes from './AppRoutes'
import {getPlaces, requestDeletePlace} from '../api'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      places: [],
      errorMessage: ''
    }
    this.fetchPlaces = this.fetchPlaces.bind(this)
    this.deletePlace = this.deletePlace.bind(this)
  }

  componentWillMount() {
    this.fetchPlaces()
  }

  fetchPlaces() {
    return getPlaces().then(places => {
      this.setState({places: places})
    }).catch(err => {
      this.setState({errorMessage: err.message})
    })
  }

  deletePlace(id) {
   requestDeletePlace(id, this.fetchPlaces.bind(this))
 }

  render() {
    return (

      <div>
        <AppRoutes places={this.state.places} fetchPlaces={this.fetchPlaces} deletePlace={this.deletePlace} />
          {this.state.errorMessage && <h1>{this.state.errorMessage}</h1>}

      </div>
    )
  }

}

module.exports = App
