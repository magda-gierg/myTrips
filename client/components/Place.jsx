import React from 'react'
import { Link } from 'react-router-dom'



class Place extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      errorMessage: ''
    }

  }


  render () {
    const {id, place, date, description} = this.props.place
    return (
      <div>
            <h2>{place}</h2>
            <h3>{date}</h3>
            <h3>{description}</h3>
      </div>
    )
  }
}

Place.defaultProps = {
  place: {
    place: '',
    date: '',
    id: null,
    description: ''
  }
}


export default Place
