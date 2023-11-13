import { ISessoesDoFilmeRepository } from "../../../repositories/ISessoesDoFilmeRepository";
import { IReadSessaoDoFilmeRequestDTO } from "./ReadSessaoDoFilmeDTO";
import { SessaoDoFilme } from "../../../entities/SessaoDoFilme";

export class ReadSessaoDoFilmeUseCase {
  constructor(private sessoesDoFilmeRepository: ISessoesDoFilmeRepository) {}

  async execute(): Promise<SessaoDoFilme[]> {
    return await this.sessoesDoFilmeRepository.read();
  }
}

