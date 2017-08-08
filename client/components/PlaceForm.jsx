import React from 'react'
import {addPlace} from '../api'
import {Link} from 'react-router-dom'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {GoogleApiWrapper} from 'google-maps-react';
class PlaceForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      errorMessage: null,
      place: {
        place: '',
        description: '',
        image: '',
        lat: '',
        lng:'',
      },
      address: '',
      geocodeResults: null,
     loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
 this.handleChange = this.handleChange.bind(this)
 this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this)
  }

  componentWillMount() {
    const {place} = this.props
    if (place) {
      this.setState(Object.assign({}, place, description))
    }
  }

  componentWillReceiveProps(nextProps) {
    const {place} = nextProps
    if (place && !this.props.place) {
      this.setState(Object.assign({}, post, description))
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({errorMessage: null})
    const {post} = this.props
    addPlace(this.state.place).then((newPlace) => {
      this.props.fetchPlaces().then(() => this.props.history.push(`/places/${newPlace.id}`))
    }).catch(err => this.setState({errorMessage: err.message}))
  }
  updateDetails(e) {
    let {place} = this.state
    place[e.target.name] = e.target.value
    this.setState({place})
  }

  handleSelect(address) {
    let {place} = this.state
    place['place'] = address

           this.setState({
              place
           })
   this.setState({
     place,
     address,
     loading: true
   })

   geocodeByAddress(address)
     .then((results) => getLatLng(results[0]))
     .then(({ lat, lng }) => {
let {place} = this.state
place['lat'] = lat
place['lng'] = lng

       this.setState({
          place
       })
     })
     .catch((error) => {
       console.log('Oh no!', error)
       this.setState({
         geocodeResults: this.renderGeocodeFailure(error),
         loading: false
       })
     })
}
  handleChange(address) {
      this.setState({
         place:{place:address},
        address,
        geocodeResults: null
      })
    }

    renderGeocodeFailure(err) {
      return (
        <div className="alert alert-danger" role="alert">
          <strong>Error!</strong> {err}
        </div>
      )
    }



render() {
  const cssClasses = {
        root: 'form-group',
        input: 'Demo__search-input',
        autocompleteContainer: 'Demo__autocomplete-container',
      }

      const AutocompleteItem = ({ formattedSuggestion }) => (
        <div className="Demo__suggestion-item">
          <i className='fa fa-map-marker Demo__suggestion-icon'/>
          <strong>{formattedSuggestion.mainText}</strong>{' '}
          <small className="text-muted">{formattedSuggestion.secondaryText}</small>
        </div>)

      const inputProps = {
        type: "text",
        value: this.state.address,
        onChange: this.handleChange,
        onBlur: () => { console.log('Blur event!'); },
        onFocus: () => { console.log('Focused!'); },
        autoFocus: true,
        placeholder: "Search Places",
        name: 'Demo__input',
        id: "my-input-id",
      }

  let {date, place, image, description, lat, lng} = this.state.place
  return (

    <form onSubmit={this.handleSubmit}>

      {!this.props.post && <h3>Add a new place</h3>}

      <div className='container'>

         <PlacesAutocomplete
           onSelect={this.handleSelect}
           autocompleteItem={AutocompleteItem}
           onEnterKeyDown={this.handleSelect}
           classNames={cssClasses}
           inputProps={inputProps}
           googleLogo={false}
         />

       </div>

        <div>
          <label>Date</label>
          <input name='date' type= "text" value={date} onChange={(e) => this.updateDetails(e)} />
        </div>

        <div>
          <label>Description</label>
          <input name='description' type="text" value={description} onChange={(e) => this.updateDetails(e)} />
        </div>

        <div>
          <label>Image url</label>
          <input name='image' type= "text" value={image} onChange={(e) => this.updateDetails(e)} />
        </div>

        <div>
          <input className='pure-button' type='submit'/>
        </div>


      {this.state.errorMessage && this.state.errorMessage}

    </form>
  )
}
}



export default PlaceForm
