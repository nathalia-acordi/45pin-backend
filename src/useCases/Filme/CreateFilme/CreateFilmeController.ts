import { Request, Response } from "express";
import { CreateFilmeUseCase } from "./CreateFilmeUseCase";

export class CreateFilmeController {
  constructor(private createFilmeUseCase: CreateFilmeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { titulo, sinopse, opcaoDeAudio } = request.body;

    try {
      const filme = await this.createFilmeUseCase.execute({
        titulo,
        sinopse,
        opcaoDeAudio
      });
      return response.status(201).send(filme);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
