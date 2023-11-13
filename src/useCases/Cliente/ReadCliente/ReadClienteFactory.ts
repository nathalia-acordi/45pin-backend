import { PrismaClienteRepository } from "../../../repositories/prisma/PrismaClienteRepository";
import { ReadClienteController } from "./ReadClienteController";
import { ReadClienteUseCase } from "./ReadClienteUseCase";

export const readClienteFactory = () => {
    const clientesRepository = new PrismaClienteRepository();
    const readCliente = new ReadClienteUseCase(clientesRepository);
    const readClienteController = new ReadClienteController(readCliente);
    return readClienteController;
}