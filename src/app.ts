import express from "express";
import { router } from "./api";

export const app = express();

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.redirect("/api/pizzas");
});
