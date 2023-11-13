import { Poltrona } from "../../entities/Poltrona";
import { IPoltronasRepository } from "../IPoltronasRepository";
import { prismaClient } from "../../database/prismaClient";

class PrismaPoltronaRepository implements IPoltronasRepository {
  async create({ lugar }: Poltrona): Promise<Poltrona> {
    const poltrona = await prismaClient.poltrona.create({
      data: {
        lugar,
      },
    });

    return poltrona;
  }

  async read(): Promise<Poltrona[]> {
    return await prismaClient.poltrona.findMany();
  }
}

export { PrismaPoltronaRepository };
