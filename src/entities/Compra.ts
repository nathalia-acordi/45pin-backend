import { uuid } from "uuidv4";

export class Compra {
  public readonly id?: string;
  public valorTotal: number = 0;

  constructor(props: Omit<Compra, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
