import { Filme } from "../../../entities/Filme";
import { IFilmesRepository } from "../../../repositories/IFilmesRepository";
import { ICreateFilmeRequestDTO } from "./CreateFilmeDTO";

export class CreateFilmeUseCase {
  constructor(private filmesRepository: IFilmesRepository) {}

  async execute(data: ICreateFilmeRequestDTO): Promise<Filme> {
    const filme = new Filme(data);
    return await this.filmesRepository.create(filme);
  }
}
