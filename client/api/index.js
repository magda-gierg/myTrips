import request from 'superagent'

export function getPlaces() {
  return request.get('/v1/places')

    .catch(err => {
      throw Error('You need to implement a post route!')
    })
}
