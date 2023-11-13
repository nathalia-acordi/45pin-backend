import { Poltrona } from "../entities/Poltrona";

interface IPoltronasRepository {
    create(poltrona: Poltrona): Promise<Poltrona>;
    read(): Promise<Poltrona[]>;
  }
  
  export { IPoltronasRepository };