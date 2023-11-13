import { Request, Response } from "express";
import { CreatePoltronaUseCase } from "./CreatePoltronaUseCase";

export class CreatePoltronaController {
  constructor(private createPoltronaUseCase: CreatePoltronaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { lugar } = request.body;

    try {
      const poltrona = await this.createPoltronaUseCase.execute({
        lugar
      });
      return response.status(201).send(poltrona);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
