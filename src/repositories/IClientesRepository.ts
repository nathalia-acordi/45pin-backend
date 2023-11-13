import { Cliente } from "../entities/Cliente";

interface IClientesRepository {
  create(cliente: Cliente): Promise<Cliente>;
  read(): Promise<Cliente[]>
}

export { IClientesRepository };
