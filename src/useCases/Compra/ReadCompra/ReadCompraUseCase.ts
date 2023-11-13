import { IComprasRepository } from "../../../repositories/IComprasRepository";
import { IReadCompraRequestDTO } from "./ReadCompraDTO";
import { Compra } from "../../../entities/Compra";

export class ReadCompraUseCase {
  constructor(private comprasRepository: IComprasRepository) {}

  async execute(): Promise<Compra[]> {
    return await this.comprasRepository.read();
  }
}

