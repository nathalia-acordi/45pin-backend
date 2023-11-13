import { Cliente } from "../../entities/Cliente";
import { IClientesRepository } from "../IClientesRepository";
import { v4 as uuid } from "uuid";

class ClientesRepositoryInMemory implements IClientesRepository {
  private clientes: Cliente[] = [];

  async create(cliente: Cliente): Promise<Cliente> {
    Object.assign(cliente, {
      id: uuid(),
    });

    this.clientes.push(cliente);
    return cliente;
  }

  async read(): Promise<Cliente[]> {
    return this.clientes;
  }
}
export { ClientesRepositoryInMemory };
