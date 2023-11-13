import { Compra } from "../../../entities/Compra";
import { ComprasRepositoryInMemory } from "../../../repositories/in-memory/ComprasRepositoryInMemory";
import { ICreateCompraRequestDTO } from "./CreateCompraDTO";
import { CreateCompraUseCase } from "./CreateCompraUseCase";

describe("Create compra", () => {
  it("Deve ser possivel criar uma compra", async () => {
    const comprasRepository = new ComprasRepositoryInMemory();
    const createCompraUseCase = new CreateCompraUseCase(comprasRepository);

    const compraData: ICreateCompraRequestDTO = {
      valorTotal: 100
    };

    const compra = await createCompraUseCase.execute(compraData);

    expect(compra).toHaveProperty("id");
    expect(compra.valorTotal).toBe(100);
  });
});
