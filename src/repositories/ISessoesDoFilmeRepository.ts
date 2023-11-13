import { SessaoDoFilme } from "../entities/SessaoDoFilme";

interface ISessoesDoFilmeRepository {
    create(sessaoDoFilme: SessaoDoFilme): Promise<SessaoDoFilme>;
    read(): Promise<SessaoDoFilme[]>;
  }
  
  export { ISessoesDoFilmeRepository };