import { PrismaClienteRepository } from "../../../repositories/prisma/PrismaClienteRepository";
import { CreateClienteController } from "./CreateClienteController";
import { CreateClienteUseCase } from "./CreateClienteUseCase";

export const createClienteFactory = () => {
  const clientesRepository = new PrismaClienteRepository();
  const createCliente = new CreateClienteUseCase(clientesRepository);
  const createClienteController = new CreateClienteController(createCliente);
  return createClienteController;
};