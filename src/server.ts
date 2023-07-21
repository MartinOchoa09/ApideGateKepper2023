import { config as dotEnvConfig } from "dotenv";
import express from "express";
dotEnvConfig();
const cors = require("cors");

import { alertaRouter } from "./alertas/infraestructure/AlertaRouter";
import { notiRouter } from "./alertas/infraestructure/AlertaRouter";
import { config } from "./config";
import { usersRouter } from "./usuarios/infrastructure/UsersRouter";

function boostrap() {
  const app = express();

  app.use(cors());

  app.use(express.json());
  app.use("/Users", usersRouter);
  app.use("/Alerta", alertaRouter);
  app.use("/Notis", notiRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`Api corriendo en el puerto ${port}`);
  });
}

boostrap();
