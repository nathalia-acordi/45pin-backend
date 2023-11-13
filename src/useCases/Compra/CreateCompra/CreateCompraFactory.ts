import { PrismaCompraRepository } from "../../../repositories/prisma/PrismaCompraRepository";
import { CreateCompraController } from "./CreateCompraController";
import { CreateCompraUseCase } from "./CreateCompraUseCase";

export const createCompraFactory = () => {
  const comprasRepository = new PrismaCompraRepository();
  const createCompra = new CreateCompraUseCase(comprasRepository);
  const createCompraController = new CreateCompraController(createCompra);
  return createCompraController;
};
