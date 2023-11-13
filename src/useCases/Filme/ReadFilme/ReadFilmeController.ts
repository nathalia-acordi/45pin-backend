import { Request, Response } from "express";
import { ReadFilmeUseCase } from "./ReadFilmeUseCase";

export class ReadFilmeController {
  constructor(private readFilmeUseCase: ReadFilmeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const filmes = await this.readFilmeUseCase.execute();
      return response.status(200).send(filmes);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}