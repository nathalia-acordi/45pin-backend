import { Filme } from "../entities/Filme";

interface IFilmesRepository {
    create(filme: Filme): Promise<Filme>;
    read(): Promise<Filme[]>
  }
  
  export { IFilmesRepository };