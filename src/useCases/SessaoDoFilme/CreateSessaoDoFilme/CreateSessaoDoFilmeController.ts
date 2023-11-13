import { Request, Response } from "express";
import { CreateSessaoDoFilmeUseCase } from "./CreateSessaoDoFilmeUseCase";

export class CreateSessaoDoFilmeController {
  constructor(private createSessaoDoFilmeUseCase: CreateSessaoDoFilmeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { horario, data, sala, valor } = request.body;

    try {
      const sessaoDoFilme = await this.createSessaoDoFilmeUseCase.execute({
       horario,
       data,
       sala,
       valor
      });
      return response.status(201).send(sessaoDoFilme);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
