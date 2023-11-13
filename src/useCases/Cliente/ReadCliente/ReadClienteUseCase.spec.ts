import { Cliente } from "../../../entities/Cliente";
import { ClientesRepositoryInMemory } from "../../../repositories/in-memory/ClientesRepositoryInMemory";
import { IReadClienteRequestDTO } from "./ReadClienteDTO";
import { ICreateClienteRequestDTO } from "../CreateCliente/CreateClienteDTO";
import { ReadClienteUseCase } from "./ReadClienteUseCase";
import { CreateClienteUseCase } from "../CreateCliente/CreateClienteUseCase";

describe("Read cliente", () => {
  it("Deve ser possível ler um cliente", async () => {
    const clientesRepository = new ClientesRepositoryInMemory();
    const createClienteUseCase = new CreateClienteUseCase(clientesRepository);

    const clienteData: ICreateClienteRequestDTO = {
      nome: "John Doe",
      email: "johndoe@email.com",
      senha: "12345",
    };

    await createClienteUseCase.execute(clienteData);

    const readClienteUseCase = new ReadClienteUseCase(clientesRepository);
    const clientes = await readClienteUseCase.execute();

    expect(clientes[0]).toHaveProperty("id");
    expect(clientes[0].nome).toBe("John Doe");
  });
});
