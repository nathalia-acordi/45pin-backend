import { Request, Response } from "express";
import { ReadSessaoDoFilmeUseCase } from "./ReadSessaoDoFilmeUseCase";

export class ReadSessaoDoFilmeController {
  constructor(private readSessaoDoFilmeUseCase: ReadSessaoDoFilmeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const sessoesDoFilme = await this.readSessaoDoFilmeUseCase.execute();
      return response.status(200).send(sessoesDoFilme);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}