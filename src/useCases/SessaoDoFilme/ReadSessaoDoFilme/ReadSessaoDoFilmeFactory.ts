import { PrismaSessaoDoFilmeRepository } from "../../../repositories/prisma/PrismaSessaoDoFilmeRepository";
import { ReadSessaoDoFilmeController } from "./ReadSessaoDoFilmeController";
import { ReadSessaoDoFilmeUseCase } from "../ReadSessaoDoFilme/ReadSessaoDoFilmeUseCase";

export const readSessaoDoFilmeFactory = () => {
  const sessoesDoFilmeRepository = new PrismaSessaoDoFilmeRepository();
  const readSessaoDoFilme= new ReadSessaoDoFilmeUseCase(sessoesDoFilmeRepository);
  const readSessaoDoFilmeController = new ReadSessaoDoFilmeController(readSessaoDoFilme);
  return readSessaoDoFilmeController;
};
