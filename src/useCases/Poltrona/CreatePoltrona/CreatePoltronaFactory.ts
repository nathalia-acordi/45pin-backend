import { PrismaPoltronaRepository } from "../../../repositories/prisma/PrismaPoltronaRepository";
import { CreatePoltronaController } from "./CreatePoltronaController";
import { CreatePoltronaUseCase } from "./CreatePoltronaUseCase";

export const createPoltronaFactory = () => {
  const poltronasRepository = new PrismaPoltronaRepository();
  const createPoltrona = new CreatePoltronaUseCase(poltronasRepository);
  const createPoltronaController = new CreatePoltronaController(createPoltrona);
  return createPoltronaController;
};
