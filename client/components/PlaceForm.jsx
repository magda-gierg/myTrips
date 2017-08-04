import React from 'react'
import {addPlace} from '../api'
import {Link} from 'react-router-dom'

class PlaceForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      errorMessage: null,
      place: {
        place: '',
        description: '',
        image: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
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


render() {

  let {data, place, image, description} = this.state.place
  return (
    <form onSubmit={this.handleSubmit}>

      {!this.props.post && <h2>Add a new place</h2>}

        <div>
          <label>Data</label>
          <textarea name='data' value={data} onChange={(e) => this.updateDetails(e)}></textarea>
        </div>

        <div>
          <label>Place</label>
          <input type='text' name='place' value={place} onChange={(e) => this.updateDetails(e)}/>
        </div>

        <div>
          <label>Description</label>
          <textarea name='description' value={description} onChange={(e) => this.updateDetails(e)}></textarea>
        </div>

        <div>
          <label>Image Url</label>
          <textarea name='image' value={image} onChange={(e) => this.updateDetails(e)}></textarea>
        </div>

        <div>
          <input className='pure-button' type='submit'/>
        </div>


      {this.state.errorMessage && this.state.errorMessage}
      <Link to="/" >Home</Link>
    </form>
  )
}
}


export default PlaceForm
