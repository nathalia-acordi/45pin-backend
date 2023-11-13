import { Cliente } from "../../entities/Cliente";
import { IClientesRepository } from "../IClientesRepository";
import { prismaClient } from "../../database/prismaClient";

class PrismaClienteRepository implements IClientesRepository {
  async create({ nome, email, senha }: Cliente): Promise<Cliente> {
    const cliente = await prismaClient.cliente.create({
      data: {
        nome,
        email,
        senha,
      },
    });
    return cliente;
  }

  async read (): Promise<Cliente[]> {
    return await prismaClient.cliente.findMany();
  }
}

export { PrismaClienteRepository };
