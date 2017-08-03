import React from 'react'
import {Link} from 'react-router-dom'


function Places (props) {
  console.log('Places',props)
  return (
    <div>
      <h1>Places</h1>
      <ul>
        {props.places.map((place, key) => {
          console.log(place)
          return <li key={key}><Link to={"/places/" + place.id}>{place.place}</Link></li>
        })}
      </ul>

    </div>
  )
}

Places.defaultProps = {
  places: []
}

export default Places
