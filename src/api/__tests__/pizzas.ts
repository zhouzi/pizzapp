import supertest from "supertest";
import { database } from "../../database";
import { app } from "../../app";

describe("/api/pizzas", () => {
  beforeAll(async () => {
    await database.migrate.latest();
  });

  afterAll(async () => {
    await database.destroy();
  });

  it("should return pizzas", async () => {
    const request = supertest(app);
    const response = await request.get("/api/pizzas");

    expect(response.status).toBe(200);
  });

  it("should create a pizza", async () => {
    const request = supertest(app);

    const pizza = {
      name: "Margarita",
      price: 9.99,
      size: "S",
    };
    const response = await request.post("/api/pizzas").send(pizza);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(pizza);
  });
});
