import Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("pizzas", (table) => {
    table.increments("id").unique().primary().notNullable();
    table.string("name").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("pizzas");
}
