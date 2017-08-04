const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getPlaces,
  addPlace
}

function getPlaces() {
  return knex("places")
}

function addPlace(body) {
  return knex("places").insert(body)

}
