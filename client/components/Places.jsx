import React from 'react'
import {Link} from 'react-router-dom'


function Places(props) {
  console.log('Places', props)
  return (
    <div>
      <h1>Places</h1>
      <ul>
        {props.places.map((place, key) => {
          console.log(place)
          return <li key={key}>
            <Link to={"/places/" + place.id}>{place.place}</Link>
            <button onClick={() => props.deletePlace(place.id)} >Delete</button>
          </li>
        })}
      </ul>
      <Link to="/places/new">Add new</Link>

    </div>
  )
}

Places.defaultProps = {
  places: []
}

export default Places
