import express from "express";
import "./env";
import { router } from "./api";

const app = express();

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.redirect("/api/pizzas");
});

app.listen(process.env.PORT);
