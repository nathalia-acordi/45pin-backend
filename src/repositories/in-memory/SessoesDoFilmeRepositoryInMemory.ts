import { SessaoDoFilme } from "../../entities/SessaoDoFilme";
import { ISessoesDoFilmeRepository } from "../ISessoesDoFilmeRepository";
import { v4 as uuid } from "uuid";

class SessoesDoFilmeRepositoryInMemory implements ISessoesDoFilmeRepository {
  private sessoesDoFilme: SessaoDoFilme[] = [];

  async create(sessaoDoFilme: SessaoDoFilme): Promise<SessaoDoFilme> {
    Object.assign(sessaoDoFilme, {
      id: uuid(),
    });

    this.sessoesDoFilme.push(sessaoDoFilme);
    return sessaoDoFilme;
  }

  async read(): Promise<SessaoDoFilme[]> {
    return this.sessoesDoFilme;
  }
}

export { SessoesDoFilmeRepositoryInMemory };