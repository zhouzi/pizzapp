import { PizzaModel } from "../database";

describe("PizzaModel", () => {
  it("should validate size", () => {
    expect(() =>
      PizzaModel.fromJson({
        name: "Margarita",
        price: 19.9,
        size: "XXL",
      })
    ).toThrowError("size: should be equal to one of the allowed values");
  });
});
