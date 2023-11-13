import { IClientesRepository } from "../../../repositories/IClientesRepository";
import { IReadClienteRequestDTO } from "./ReadClienteDTO";
import { Cliente } from "../../../entities/Cliente";

export class ReadClienteUseCase {
  constructor(private clientesRepository: IClientesRepository) {}

  async execute(): Promise<Cliente[]> {
    return await this.clientesRepository.read();
  }
}
