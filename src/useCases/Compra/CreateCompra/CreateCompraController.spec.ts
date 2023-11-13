import { app } from "../../../app";
import request from "supertest";

describe("Criar Controlador de Compra", () => {
  it("deve ser possível criar uma nova compra", async () => {
    const response = await request(app).post("/compras").send({
     valorTotal: 100,
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("valorTotal");
  });
});
