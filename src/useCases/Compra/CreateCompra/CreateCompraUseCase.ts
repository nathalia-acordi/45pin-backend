import { Compra } from "../../../entities/Compra";
import { IComprasRepository } from "../../../repositories/IComprasRepository";
import { ICreateCompraRequestDTO } from "./CreateCompraDTO";

export class CreateCompraUseCase {
  constructor(private comprasRepository: IComprasRepository) {}

  async execute(data: ICreateCompraRequestDTO): Promise<Compra> {
    const compra = new Compra(data);
    return await this.comprasRepository.create(compra);
  }
}
