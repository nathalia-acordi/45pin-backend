import { Compra } from "../entities/Compra";

interface IComprasRepository {
  create(compra: Compra): Promise<Compra>;
  read(): Promise<Compra[]>
}

export { IComprasRepository };