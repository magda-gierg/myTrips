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
