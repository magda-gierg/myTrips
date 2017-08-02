const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getPlaces
}

function getPlaces() {
  return knex("places")
}
