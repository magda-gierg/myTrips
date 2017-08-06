
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Places', function (table) {
    table.increments().primary()
    table.string('place')
    table.date('date')
    table.string('description')
    table.string('image')
    table.string('lat')
    table.string('lng')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Places')
}
