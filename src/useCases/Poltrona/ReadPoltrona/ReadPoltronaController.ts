import { Request, Response } from "express";
import { ReadPoltronaUseCase } from "./ReadPoltronaUseCase";

export class ReadPoltronaController {
  constructor(private readPoltronaUseCase: ReadPoltronaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const poltronas = await this.readPoltronaUseCase.execute();
      return response.status(200).send(poltronas);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}