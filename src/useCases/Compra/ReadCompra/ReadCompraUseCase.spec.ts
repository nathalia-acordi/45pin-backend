import { Compra } from "../../../entities/Compra";
import { ComprasRepositoryInMemory } from "../../../repositories/in-memory/ComprasRepositoryInMemory";
import { IReadCompraRequestDTO } from "./ReadCompraDTO";
import { ICreateCompraRequestDTO } from "../CreateCompra/CreateCompraDTO";
import { ReadCompraUseCase } from "./ReadCompraUseCase";
import { CreateCompraUseCase } from "../CreateCompra/CreateCompraUseCase";

describe("Read compra", () => {
  it("Deve ser possível ler uma compra", async () => {
    const comprasRepository = new ComprasRepositoryInMemory();
    const createCompraUseCase = new CreateCompraUseCase(comprasRepository);

    const compraData: ICreateCompraRequestDTO = {
     valorTotal: 100
    };

    await createCompraUseCase.execute(compraData);

    const readCompraUseCase = new ReadCompraUseCase(comprasRepository);
    const compras = await readCompraUseCase.execute();

    expect(compras[0]).toHaveProperty("id");
    expect(compras[0].valorTotal).toBe(100);
  });
});
