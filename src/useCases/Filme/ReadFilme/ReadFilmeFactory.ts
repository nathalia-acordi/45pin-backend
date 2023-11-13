import { PrismaFilmeRepository } from "../../../repositories/prisma/PrismaFilmeRepository";
import { ReadFilmeController } from "./ReadFilmeController";
import { ReadFilmeUseCase } from "./ReadFilmeUseCase";

export const readFilmeFactory = () => {
  const filmesRepository = new PrismaFilmeRepository();
  const readFilme = new ReadFilmeUseCase(filmesRepository);
  const readFilmeController = new ReadFilmeController(readFilme);
  return readFilmeController;
};
