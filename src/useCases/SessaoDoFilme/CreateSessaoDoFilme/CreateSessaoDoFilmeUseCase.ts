import { SessaoDoFilme } from "../../../entities/SessaoDoFilme";
import { ISessoesDoFilmeRepository } from "../../../repositories/ISessoesDoFilmeRepository";
import { ICreateSessaoDoFilmeRequestDTO } from "./CreateSessaoDoFilmeDTO";

export class CreateSessaoDoFilmeUseCase {
  constructor(private sessoesDoFilmeRepository: ISessoesDoFilmeRepository) {}

  async execute(data: ICreateSessaoDoFilmeRequestDTO): Promise<SessaoDoFilme> {
    const sessaoDoFilme = new SessaoDoFilme(data);
    return await this.sessoesDoFilmeRepository.create(sessaoDoFilme);
  }
}
