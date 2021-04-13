import express from "express";
import supertest from "supertest";
import { router } from "../pizzas";

describe("/api/pizzas", () => {
  it("should return pizzas", async () => {
    const request = supertest(express().use(router));
    const response = await request.get("/pizzas");

    expect(response.status).toBe(200);
  });
});
