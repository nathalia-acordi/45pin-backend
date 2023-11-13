import { Compra } from "../../entities/Compra";
import { IComprasRepository } from "../IComprasRepository";
import { prismaClient } from "../../database/prismaClient";

class PrismaCompraRepository implements IComprasRepository {
  async create({ valorTotal }: Compra): Promise<Compra> {
    const compra = await prismaClient.compra.create({
      data: {
        valorTotal
      },
    });

    return compra;
  }

  async read (): Promise<Compra[]> {
    return await prismaClient.compra.findMany();
  }
}

export { PrismaCompraRepository };