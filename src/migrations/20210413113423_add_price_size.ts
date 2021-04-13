import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("pizzas", (table) => {
    table.float("price").notNullable().defaultTo(9.99);
    table.enum("size", ["S", "L", "XL"]).notNullable().defaultTo("S");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("pizzas", (table) => {
    table.dropColumn("price");
    table.dropColumn("size");
  });
}
