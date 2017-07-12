exports.up = function (knex, Promise) {
  return knex.schema.createTable('methods', tbl => {
    table.increments().primary()
    table.string('name').notNullable()
    table.string('description').notNullable()
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('methods')
};
