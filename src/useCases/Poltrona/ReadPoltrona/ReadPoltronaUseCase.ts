import { IPoltronasRepository } from "../../../repositories/IPoltronasRepository";
import { IReadPoltronaRequestDTO } from "./ReadPoltronaDTO";
import { Poltrona } from "../../../entities/Poltrona";

export class ReadPoltronaUseCase {
  constructor(private poltronasRepository: IPoltronasRepository) {}

  async execute(): Promise<Poltrona[]> {
    return await this.poltronasRepository.read();
  }
}

