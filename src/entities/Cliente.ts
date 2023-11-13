import { uuid } from "uuidv4";

export class Cliente {
  public readonly id?: string;
  public nome: string = "";
  public email: string = "";
  public senha: string = "";

  constructor(props: Omit<Cliente, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}

