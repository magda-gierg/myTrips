import React from 'react'
import AppRoutes from './AppRoutes'
import {getPlaces} from '../api'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      places: [],
      errorMessage: ''
    }
    this.fetchPlaces = this.fetchPlaces.bind(this)
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

  render() {
    return (

      <div>
        <AppRoutes places={this.state.places} fetchPlaces={this.fetchPlaces}/> {this.state.errorMessage && <h1>{this.state.errorMessage}</h1>}

      </div>
    )
  }

}

module.exports = App
