import { Filme } from "../../entities/Filme";
import { IFilmesRepository } from "../IFilmesRepository";
import { prismaClient } from "../../database/prismaClient";

class PrismaFilmeRepository implements IFilmesRepository {
  async create({ titulo, sinopse, opcaoDeAudio }: Filme): Promise<Filme> {
    const filme = await prismaClient.filme.create({
      data: {
        titulo,
        sinopse,
        opcaoDeAudio,
      },
    });

    return filme;
  }

  async read(): Promise<Filme[]> {
    return await prismaClient.filme.findMany();
  }
}

export { PrismaFilmeRepository };
