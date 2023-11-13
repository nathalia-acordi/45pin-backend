import { IFilmesRepository } from "../../../repositories/IFilmesRepository";
import { IReadFilmeRequestDTO } from "./ReadFilmeDTO";
import { Filme } from "../../../entities/Filme";

export class ReadFilmeUseCase {
  constructor(private filmesRepository: IFilmesRepository) {}

  async execute(): Promise<Filme[]> {
    return await this.filmesRepository.read();
  }
}

