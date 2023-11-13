import { PrismaPoltronaRepository } from "../../../repositories/prisma/PrismaPoltronaRepository";
import { ReadPoltronaController } from "./ReadPoltronaController";
import { ReadPoltronaUseCase } from "./ReadPoltronaUseCase";

export const readPoltronaFactory = () => {
  const poltronasRepository = new PrismaPoltronaRepository();
  const readPoltrona = new ReadPoltronaUseCase(poltronasRepository);
  const readPoltronaController = new ReadPoltronaController(readPoltrona);
  return readPoltronaController;
};
