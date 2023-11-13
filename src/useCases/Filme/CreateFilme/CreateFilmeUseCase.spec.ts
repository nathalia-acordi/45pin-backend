import { Filme } from "../../../entities/Filme";
import { FilmesRepositoryInMemory } from "../../../repositories/in-memory/FilmesRepositoryInMemory";
import { ICreateFilmeRequestDTO } from "./CreateFilmeDTO";
import { CreateFilmeUseCase } from "./CreateFilmeUseCase";

describe("Create filme", () => {
  it("Deve ser possivel criar um filme", async () => {
    const filmesRepository = new FilmesRepositoryInMemory();
    const createFilmeUseCase = new CreateFilmeUseCase(filmesRepository);

    const filmeData: ICreateFilmeRequestDTO = {
      titulo: "Suspiria",
      sinopse: "Suspiria é um filme de terror sobre uma academia de dança na Alemanha com segredos de bruxaria.",
      opcaoDeAudio: "Legendado"
    };

    const filme = await createFilmeUseCase.execute(filmeData);

    expect(filme).toHaveProperty("id");
    expect(filme.titulo).toBe("Suspiria");
  });
});
