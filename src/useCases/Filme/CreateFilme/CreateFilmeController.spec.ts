import { app } from "../../../app";
import request from "supertest";

describe("Criar Controlador de Filme", () => {
  it("deve ser possível criar um novo filme", async () => {
    const response = await request(app).post("/filmes").send({
     titulo: 'filme',
     sinopse: 'testando :)',
     opcaoDeAudio: 'teste'

    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("titulo");
    expect(response.body).toHaveProperty("sinopse");
    expect(response.body).toHaveProperty("opcaoDeAudio");
  });
});
