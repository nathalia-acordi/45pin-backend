import { PrismaCompraRepository } from "../../../repositories/prisma/PrismaCompraRepository";
import { ReadCompraController } from "./ReadCompraController";
import { ReadCompraUseCase } from "./ReadCompraUseCase";

export const readCompraFactory = () => {
  const comprasRepository = new PrismaCompraRepository();
  const readCompra = new ReadCompraUseCase(comprasRepository);
  const readCompraController = new ReadCompraController(readCompra);
  return readCompraController;
};
