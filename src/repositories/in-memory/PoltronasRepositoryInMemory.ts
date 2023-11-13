import { Poltrona } from "../../entities/Poltrona";
import { IPoltronasRepository } from "../IPoltronasRepository";
import { v4 as uuid } from "uuid";

class PoltronasRepositoryInMemory implements IPoltronasRepository {
  private poltronas: Poltrona[] = [];

  async create(poltrona: Poltrona): Promise<Poltrona> {
    Object.assign(poltrona, {
      id: uuid(),
    });

    this.poltronas.push(poltrona);
    return poltrona;
  }

  async read(): Promise<Poltrona[]> {
    return this.poltronas;
  }
}

export { PoltronasRepositoryInMemory };