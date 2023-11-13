import { Filme } from "../../entities/Filme";
import { IFilmesRepository } from "../IFilmesRepository";
import { v4 as uuid } from "uuid";

class FilmesRepositoryInMemory implements IFilmesRepository {
  private filmes: Filme[] = [];

  async create(filme: Filme): Promise<Filme> {
    Object.assign(filme, {
      id: uuid(),
    });

    this.filmes.push(filme);
    return filme;
  }

  async read(): Promise<Filme[]> {
    return this.filmes;
  }
}

export { FilmesRepositoryInMemory };
