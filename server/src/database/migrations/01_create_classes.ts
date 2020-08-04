import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();
    
    table.integer('user_id') // foreign key
      .notNullable()
      .references('id') // referencia campo id
      .inTable('users') // dentro da tabela 'users'
      .onUpdate('CASCADE')
      .onDelete('CASCADE'); // if(DELETE) {deleta todas as aulas do professor}
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}