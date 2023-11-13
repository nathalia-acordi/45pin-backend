import { PrismaFilmeRepository } from "../../../repositories/prisma/PrismaFilmeRepository";
import { CreateFilmeController } from "./CreateFilmeController";
import { CreateFilmeUseCase } from "./CreateFilmeUseCase";

export const createFilmeFactory = () => {
  const filmesRepository = new PrismaFilmeRepository();
  const createFilme = new CreateFilmeUseCase(filmesRepository);
  const createFilmeController = new CreateFilmeController(createFilme);
  return createFilmeController;
};
