import { Poltrona } from "../../../entities/Poltrona";
import { IPoltronasRepository } from "../../../repositories/IPoltronasRepository";
import { ICreatePoltronaRequestDTO } from "./CreatePoltronaDTO";

export class CreatePoltronaUseCase {
  constructor(private poltronasRepository: IPoltronasRepository) {}

  async execute(data: ICreatePoltronaRequestDTO): Promise<Poltrona> {
    const poltrona = new Poltrona(data);
    return await this.poltronasRepository.create(poltrona);
  }
}
