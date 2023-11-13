import { Request, Response } from "express";
import { CreateClienteUseCase } from "./CreateClienteUseCase";

export class CreateClienteController {
  constructor(private createClienteUseCase: CreateClienteUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, email, senha } = request.body;

    try {
      const cliente = await this.createClienteUseCase.execute({
        nome,
        email,
        senha,
      });
      return response.status(201).send(cliente);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
