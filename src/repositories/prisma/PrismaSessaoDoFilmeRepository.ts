import { SessaoDoFilme } from "../../entities/SessaoDoFilme";
import { ISessoesDoFilmeRepository } from "../ISessoesDoFilmeRepository";
import { prismaClient } from "../../database/prismaClient";

class PrismaSessaoDoFilmeRepository implements ISessoesDoFilmeRepository {
  async create({
    horario,
    data,
    sala,
    valor,
  }: SessaoDoFilme): Promise<SessaoDoFilme> {
    const sessaoDoFilme = await prismaClient.sessaoDoFilme.create({
      data: {
        horario,
        data,
        sala,
        valor,
      },
    });

    return sessaoDoFilme;
  }

  async read(): Promise<SessaoDoFilme[]> {
    return await prismaClient.sessaoDoFilme.findMany();
  }
}

export { PrismaSessaoDoFilmeRepository };
