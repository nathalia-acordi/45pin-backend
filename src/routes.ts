import { Router } from "express";
import { createClienteFactory } from "./useCases/Cliente/CreateCliente/CreateClienteFactory";
import { readClienteFactory } from "./useCases/Cliente/ReadCliente/ReadClienteFactory";
import { createCompraFactory } from "./useCases/Compra/CreateCompra/CreateCompraFactory";
import { readCompraFactory } from "./useCases/Compra/ReadCompra/ReadCompraFactory";
import { createFilmeFactory } from "./useCases/Filme/CreateFilme/CreateFilmeFactory";
import { readFilmeFactory } from "./useCases/Filme/ReadFilme/ReadFilmeFactory";
import { createPoltronaFactory } from "./useCases/Poltrona/CreatePoltrona/CreatePoltronaFactory";
import { readPoltronaFactory } from "./useCases/Poltrona/ReadPoltrona/ReadPoltronaFactory";
import { createSessaoDoFilmeFactory } from "./useCases/SessaoDoFilme/CreateSessaoDoFilme/CreateSessaoDoFilmeFactory";
import { readSessaoDoFilmeFactory } from "./useCases/SessaoDoFilme/ReadSessaoDoFilme/ReadSessaoDoFilmeFactory";

const router = Router();

router.post("/clientes", (request, response) =>
  createClienteFactory().handle(request, response)
);

router.get("/clientes", (request, response) =>
  readClienteFactory().handle(request, response)
);

router.post("/compras", (request, response) =>
  createCompraFactory().handle(request, response)
);

router.get("/compras", (request, response) =>
  readCompraFactory().handle(request, response)
);

router.post("/filmes", (request, response) =>
  createFilmeFactory().handle(request, response)
);

router.get("/filmes", (request, response) =>
  readFilmeFactory().handle(request, response)
);

router.post("/poltronas", (request, response) =>
  createPoltronaFactory().handle(request, response)
);

router.get("/poltronas", (request, response) =>
  readPoltronaFactory().handle(request, response)
);

router.post("/sessoesDoFilme", (request, response) =>
  createSessaoDoFilmeFactory().handle(request, response)
);

router.get("/sessoesDoFilme", (request, response) =>
  readSessaoDoFilmeFactory().handle(request, response)
);

export { router };
