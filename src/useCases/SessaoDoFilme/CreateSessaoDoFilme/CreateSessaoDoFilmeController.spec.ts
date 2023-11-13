import { app } from "../../../app";
import request from "supertest";

describe("Criar Controlador de Sessão do Filme", () => {
  it("deve ser possível criar uma nova sessão do filme", async () => {
    const response = await request(app).post("/sessoesDoFilme").send({
      horario: "20:30",
      data: "10/12/2023",
      sala: 3,
      valor: 15
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("horario");
    expect(response.body).toHaveProperty("data");
    expect(response.body).toHaveProperty("sala");
    expect(response.body).toHaveProperty("valor");
  });
});
