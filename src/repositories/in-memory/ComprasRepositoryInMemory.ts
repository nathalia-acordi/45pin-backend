import { Compra } from "../../entities/Compra";
import { IComprasRepository } from "../IComprasRepository";
import { v4 as uuid } from "uuid";

class ComprasRepositoryInMemory implements IComprasRepository {
  private compras: Compra[] = [];

  async create(compra: Compra): Promise<Compra> {
    Object.assign(compra, {
      id: uuid(),
    });

    this.compras.push(compra);
    return compra;
  }

  async read(): Promise<Compra[]> {
    return this.compras;
  }
}

export { ComprasRepositoryInMemory };