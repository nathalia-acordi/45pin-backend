import { uuid } from "uuidv4";

export class Poltrona {
  public readonly id?: string;
  public lugar: string = "";

  constructor(props: Omit<Poltrona, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
