import { Poltrona } from "../../../entities/Poltrona";
import { PoltronasRepositoryInMemory } from "../../../repositories/in-memory/PoltronasRepositoryInMemory";
import { IReadPoltronaRequestDTO } from "./ReadPoltronaDTO";
import { ICreatePoltronaRequestDTO } from "../CreatePoltrona/CreatePoltronaDTO";
import { ReadPoltronaUseCase } from "./ReadPoltronaUseCase";
import { CreatePoltronaUseCase } from "../CreatePoltrona/CreatePoltronaUseCase";

describe("Read poltrona", () => {
  it("Deve ser possível ler uma poltrona", async () => {
    const poltronasRepository = new PoltronasRepositoryInMemory();
    const createPoltronaUseCase = new CreatePoltronaUseCase(poltronasRepository);

    const poltronaData: ICreatePoltronaRequestDTO = {
        lugar: "A1"
    };

    await createPoltronaUseCase.execute(poltronaData);

    const readPoltronaUseCase = new ReadPoltronaUseCase(poltronasRepository);
    const poltronas = await readPoltronaUseCase.execute();

    expect(poltronas[0]).toHaveProperty("id");
    expect(poltronas[0].lugar).toBe("A1");
  });
});
