
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Places', function (table) {
    table.increments().primary()
    table.string('place')
    table.date('date')
    table.string('description')
    table.string('image')
    table.string('lang')
    table.string('long')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Places')
}
