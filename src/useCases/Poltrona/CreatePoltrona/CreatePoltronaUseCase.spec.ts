import { Poltrona } from "../../../entities/Poltrona";
import { PoltronasRepositoryInMemory } from "../../../repositories/in-memory/PoltronasRepositoryInMemory";
import { ICreatePoltronaRequestDTO } from "./CreatePoltronaDTO";
import { CreatePoltronaUseCase } from "./CreatePoltronaUseCase";

describe("Create poltrona", () => {
  it("Deve ser possivel criar uma poltrona", async () => {
    const poltronasRepository = new PoltronasRepositoryInMemory();
    const createPoltronaUseCase = new CreatePoltronaUseCase(poltronasRepository);

    const poltronaData: ICreatePoltronaRequestDTO = {
      lugar: "A1"
    };

    const poltrona = await createPoltronaUseCase.execute(poltronaData);

    expect(poltrona).toHaveProperty("id");
    expect(poltrona.lugar).toBe("A1");
  });
});
