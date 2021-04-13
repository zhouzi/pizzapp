import { Model } from "objection";
import Knex from "knex";
import config from "./knexfile";

export const database = Knex(config);

Model.knex(database);

export class PizzaModel extends Model {
  id!: number;
  name!: string;

  static get tableName() {
    return "pizzas";
  }

  static get idColumn() {
    return "id";
  }
}
