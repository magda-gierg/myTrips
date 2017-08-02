
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Places', function (table) {
    table.increments().primary()
    table.string('place')
    table.date('date')
    table.string('description')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Places')
}
