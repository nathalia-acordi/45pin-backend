import { app } from "../../../app";
import request from "supertest";

describe("Criar Controlador de Cliente", () => {
  it("deve ser possível criar um novo usuário", async () => {
    const response = await request(app).post("/clientes").send({
      nome: "teste-de-integração",
      email: "cliente.teste@teesteeee.com",
      senha: "teste@20eee233",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("senha");
  });
});
