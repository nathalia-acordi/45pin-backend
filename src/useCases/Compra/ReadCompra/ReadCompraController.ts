import { Request, Response } from "express";
import { ReadCompraUseCase } from "./ReadCompraUseCase";

export class ReadCompraController {
  constructor(private readCompraUseCase: ReadCompraUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const compras = await this.readCompraUseCase.execute();
      return response.status(200).send(compras);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}