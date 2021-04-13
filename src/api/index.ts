import { Router } from "express";
import * as pizzas from "./pizzas";

export const router = Router();

router.use("/api", pizzas.router);
