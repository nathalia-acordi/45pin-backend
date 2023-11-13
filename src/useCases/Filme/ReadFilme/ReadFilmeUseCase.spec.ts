import { Filme } from "../../../entities/Filme";
import { FilmesRepositoryInMemory } from "../../../repositories/in-memory/FilmesRepositoryInMemory";
import { IReadFilmeRequestDTO } from "./ReadFilmeDTO";
import { ICreateFilmeRequestDTO } from "../CreateFilme/CreateFilmeDTO";
import { ReadFilmeUseCase } from "./ReadFilmeUseCase";
import { CreateFilmeUseCase } from "../CreateFilme/CreateFilmeUseCase";

describe("Read filme", () => {
  it("Deve ser possível ler um filme", async () => {
    const filmesRepository = new FilmesRepositoryInMemory();
    const createFilmeUseCase = new CreateFilmeUseCase(filmesRepository);

    const filmeData: ICreateFilmeRequestDTO = {
        titulo: "Suspiria",
        sinopse: "Suspiria é um filme de terror sobre uma academia de dança na Alemanha com segredos de bruxaria.",
        opcaoDeAudio: "Legendado"
    };

    await createFilmeUseCase.execute(filmeData);

    const readFilmeUseCase = new ReadFilmeUseCase(filmesRepository);
    const filmes = await readFilmeUseCase.execute();

    expect(filmes[0]).toHaveProperty("id");
    expect(filmes[0].titulo).toBe("Suspiria");
    expect(filmes[0].sinopse).toBe("Suspiria é um filme de terror sobre uma academia de dança na Alemanha com segredos de bruxaria.");
    expect(filmes[0].opcaoDeAudio).toBe("Legendado");
  });
});
