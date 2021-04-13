import { Router } from "express";
import { PizzaModel } from "../database";

export const router = Router();

router.get("/pizzas", async (req, res) => {
  const pizzas = await PizzaModel.query();
  res.json(pizzas);
});

router.post("/pizzas", async (req, res) => {
  const { name, price, size } = req.body;
  const pizza = await PizzaModel.query()
    .insert({
      name,
      price,
      size,
    })
    .returning("*");
  res.json(pizza);
});

router.delete("/pizzas/:id", async (req, res) => {
  const pizza = await PizzaModel.query()
    .deleteById(req.params.id)
    .returning("*");
  res.json(pizza);
});

router.put("/pizzas/:id", async (req, res) => {
  const { name, price, size } = req.body;
  const pizza = await PizzaModel.query()
    .findById(req.params.id)
    .patch({
      name,
      price,
      size,
    })
    .returning("*");
  res.json(pizza);
});
