import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();
    
    table.integer('user_id') // foreign key
      .notNullable()
      .references('id')   // referencia campo id
      .inTable('users') // dentro da tabela 'classes'
      .onUpdate('CASCADE')
      .onDelete('CASCADE'); // if(DELETE) {deleta todas as aulas do professor}
    
    table.timestamp('created_at')
      .defaultTo('now()')
      .notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}