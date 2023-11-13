import { SessoesDoFilmeRepositoryInMemory } from "../../../repositories/in-memory/SessoesDoFilmeRepositoryInMemory";
import { ICreateSessaoDoFilmeRequestDTO } from "./CreateSessaoDoFilmeDTO";
import { CreateSessaoDoFilmeUseCase } from "./CreateSessaoDoFilmeUseCase";

describe("Create sessão do filme", () => {
  it("Deve ser possivel criar uma sessão de filme", async () => {
    const sessoesDoFilmeRepository = new SessoesDoFilmeRepositoryInMemory();
    const createSessaoDoFilmeUseCase = new CreateSessaoDoFilmeUseCase(sessoesDoFilmeRepository);

    const sessaoDoFilmeData: ICreateSessaoDoFilmeRequestDTO = {
      horario: "17:30",
      data: "07/11",
      sala: 5,
      valor: 15
    };

    const sessaoDoFilme = await createSessaoDoFilmeUseCase.execute(sessaoDoFilmeData);

    expect(sessaoDoFilme).toHaveProperty("id");
    expect(sessaoDoFilme.horario).toBe("17:30");
    expect(sessaoDoFilme.data).toBe("07/11");
    expect(sessaoDoFilme.sala).toBe(5);
    expect(sessaoDoFilme.valor).toBe(15);
  });
});
