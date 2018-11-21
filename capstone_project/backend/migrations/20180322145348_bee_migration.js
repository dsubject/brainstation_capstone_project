exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('hives', function(table){
        table.increments('id').primary();
        table.string('name').unique();
        table.boolean('queen')
        table.boolean('capped')
        table.boolean('uncapped')
        table.boolean('laying')
        table.boolean('low')
        table.boolean('normal')
        table.boolean('thriving')
        table.timestamp('created_at').notNullable().defaultsTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultsTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('hives');
  };
