exports.up = function(knex, Promise) {
    return knex.schema.createTable('players', tbl => {
      tbl.increments();
  
      tbl.string('name', 255).notNullable();
      tbl.string('sport', 255).notNullable();
      tbl.string('decade', 255);
    });
  };
  
  exports.down = function(knex, Promise) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('players');
  };
  