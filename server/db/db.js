const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getPlaces,
  addPlace,
  deletePlace
}

function getPlaces() {
  return knex("places")
}

function addPlace(body) {
  return knex("places").insert(body)
}

function deletePlace (id) {
  return knex('places').where('id', id).del()
}
