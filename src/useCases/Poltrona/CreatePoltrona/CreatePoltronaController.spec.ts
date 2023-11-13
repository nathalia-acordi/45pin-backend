import { app } from "../../../app";
import request from "supertest";

describe("Criar Controlador de Poltrona", () => {
  it("deve ser possível criar uma nova poltrona", async () => {
    const response = await request(app).post("/poltronas").send({
     lugar: 'a3'
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("lugar");
  });
});
