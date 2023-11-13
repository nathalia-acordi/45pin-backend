import { ClientesRepositoryInMemory } from "../../../repositories/in-memory/ClientesRepositoryInMemory";
import { ICreateClienteRequestDTO } from "./CreateClienteDTO";
import { CreateClienteUseCase } from "./CreateClienteUseCase";

describe("Create cliente", () => {
  it("deve ser possivel criar um cliente", async () => {
    const clientesRepository = new ClientesRepositoryInMemory();
    const createClienteUseCase = new CreateClienteUseCase(clientesRepository);

    const clienteData: ICreateClienteRequestDTO = {
      nome: "John Doe",
      email: "johndoe@email.com",
      senha: "12345",
    };

    const cliente = await createClienteUseCase.execute(clienteData);

    expect(cliente).toHaveProperty("id");
    expect(cliente.nome).toBe("John Doe");
  });
});
