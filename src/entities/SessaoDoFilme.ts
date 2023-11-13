import { uuid } from "uuidv4";

export class SessaoDoFilme {
  public readonly id?: string;
  public horario: string= "";
  public data: string= "";
  public sala: number = 0;
  public valor: number = 0;

  constructor(props: Omit<SessaoDoFilme, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
