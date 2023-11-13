import { SessaoDoFilme } from "../../../entities/SessaoDoFilme";
import { SessoesDoFilmeRepositoryInMemory } from "../../../repositories/in-memory/SessoesDoFilmeRepositoryInMemory";
import { IReadSessaoDoFilmeRequestDTO } from "./ReadSessaoDoFilmeDTO";
import { ICreateSessaoDoFilmeRequestDTO } from "../CreateSessaoDoFilme/CreateSessaoDoFilmeDTO";
import { ReadSessaoDoFilmeUseCase } from "./ReadSessaoDoFilmeUseCase";
import { CreateSessaoDoFilmeUseCase } from "../CreateSessaoDoFilme/CreateSessaoDoFilmeUseCase";

describe("Read sessão do filme", () => {
  it("Deve ser possível ler uma sessão de filme", async () => {
    const sessoesDoFilmeRepository = new SessoesDoFilmeRepositoryInMemory();
    const createSessaoDoFilmeUseCase = new CreateSessaoDoFilmeUseCase(
      sessoesDoFilmeRepository
    );

    const sessaoDoFilmeData: ICreateSessaoDoFilmeRequestDTO = {
      horario: "17:30",
      data: "07/11",
      sala: 5,
      valor: 15,
    };

    await createSessaoDoFilmeUseCase.execute(sessaoDoFilmeData);

    const readSessaoDoFilmeUseCase = new ReadSessaoDoFilmeUseCase(
      sessoesDoFilmeRepository
    );
    const sessoesDoFilme = await readSessaoDoFilmeUseCase.execute();

    expect(sessoesDoFilme[0]).toHaveProperty("id");
    expect(sessoesDoFilme[0].horario).toBe("17:30");
    expect(sessoesDoFilme[0].horario).toBe("17:30");
    expect(sessoesDoFilme[0].horario).toBe("17:30");
    expect(sessoesDoFilme[0].horario).toBe("17:30");
  });
});
