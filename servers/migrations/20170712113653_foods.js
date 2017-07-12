exports.up = function (knex, Promise) {
  return knex.schema.createTable('foods', (table) => {
    table.increments().primary()
    table.string('name').notNullable()
    table.string('type_id').references('types.id').notNullable().onDelete('CASCADE')
    table.string('method_id').references('methods.id').notNullable().onDelete('CASCADE')
    table.string('item_image').notNullable()
    table.string('instructions').notNullable()
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('foods')
};
