import { Request, Response } from "express";
import { CreateCompraUseCase } from "./CreateCompraUseCase";

export class CreateCompraController {
  constructor(private createCompraUseCase: CreateCompraUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { valorTotal } = request.body;

    try {
      const compra = await this.createCompraUseCase.execute({
      valorTotal
      });
      return response.status(201).send(compra);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
