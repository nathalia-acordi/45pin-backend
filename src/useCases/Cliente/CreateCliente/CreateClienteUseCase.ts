import { IClientesRepository } from "../../../repositories/IClientesRepository";
import { ICreateClienteRequestDTO } from "./CreateClienteDTO";
import { Cliente } from "../../../entities/Cliente";

export class CreateClienteUseCase {
  constructor(private clientesRepository: IClientesRepository) {}

  async execute(data: ICreateClienteRequestDTO): Promise<Cliente> {
    const cliente = new Cliente(data);
    return await this.clientesRepository.create(cliente);
  }
}
