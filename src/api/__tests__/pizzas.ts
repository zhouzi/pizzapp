import express from "express";
import supertest from "supertest";
import { database } from "../../database";
import { router } from "../pizzas";

describe("/api/pizzas", () => {
  beforeAll(async () => {
    await database.migrate.latest();
  });

  afterAll(async () => {
    await database.destroy();
  });

  it("should return pizzas", async () => {
    const request = supertest(express().use(router));
    const response = await request.get("/pizzas");

    expect(response.status).toBe(200);
  });
});
