import { uuid } from "uuidv4";

export class Filme {
  public readonly id?: string;
  public titulo: string = "";
  public sinopse: string = "";
  public opcaoDeAudio: string = "";

  constructor(props: Omit<Filme, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
