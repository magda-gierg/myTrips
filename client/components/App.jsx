import React from 'react'
import AppRoutes from './AppRoutes'
import Header from './Header'
import {getPlaces, requestDeletePlace} from '../api'
import PropTypes from "prop-types";
import AddIcon from "material-ui-icons/Add"
import { withStyles, createStyleSheet } from "material-ui/styles"
import Button from "material-ui/Button"

const styleSheet = createStyleSheet(theme => ({
  card: {
    maxWidth: 250,
    padding: 16,
    margin: 10
  },
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 16,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    position: "fixed",
    right: "50px",
    bottom: "50px"
  },
  iButton: {
    margin: theme.spacing.unit,
  }
}));

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
    return getPlaces()
    .then(placesArray => {
      this.setState({places: placesArray})
    })
    .catch(err => {
      this.setState({errorMessage: err.message})
    })
  }

  deletePlace(id) {
    requestDeletePlace(id, this.fetchPlaces)
  }

  render() {
    const classes = this.props.classes;

    return (

      <div>
        <Header />
        <AppRoutes places={this.state.places} fetchPlaces={this.fetchPlaces} deletePlace={this.deletePlace} />
        {this.state.errorMessage && <h1>{this.state.errorMessage}</h1>}
        <Button fab color="primary" className={classes.button} href="/#/places/new">
          <AddIcon />
        </Button>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(App);
