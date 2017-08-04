import request from 'superagent'

export function getPlaces() {
  return request.get('/v1/places')
  .then(data => {
        const places = data.body
        return places.map(place => {
          return Object.assign(
            {}, place
          )
        })
      })
    .catch(err => {
      throw Error('You need to implement a post route!')
    })
}

export function addPlace (place) {
  console.log({place});
  return request.post('/v1/places')
    .send(place)
    .then(data => {
      const returnedPlace = data.body
      return returnedPlace
    })
    .catch(err => {
      throw Error('Cannot POST a new Place!')
    })
}
