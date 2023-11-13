import { PrismaSessaoDoFilmeRepository } from "../../../repositories/prisma/PrismaSessaoDoFilmeRepository";
import { CreateSessaoDoFilmeController } from "./CreateSessaoDoFilmeController";
import { CreateSessaoDoFilmeUseCase } from "../CreateSessaoDoFilme/CreateSessaoDoFilmeUseCase";

export const createSessaoDoFilmeFactory = () => {
  const sessoesDoFilmeRepository = new PrismaSessaoDoFilmeRepository();
  const createSessaoDoFilme= new CreateSessaoDoFilmeUseCase(sessoesDoFilmeRepository);
  const createSessaoDoFilmeController = new CreateSessaoDoFilmeController(createSessaoDoFilme);
  return createSessaoDoFilmeController;
};
