import { Request, Response } from "express";
import { ReadClienteUseCase } from "./ReadClienteUseCase";

export class ReadClienteController {
  constructor(private readClienteUseCase: ReadClienteUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const clientes = await this.readClienteUseCase.execute();
      return response.status(200).send(clientes);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
