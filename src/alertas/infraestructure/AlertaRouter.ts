import express from "express";

import { crearAlertController } from "./dependencies";
import { crearNotificacionAlertController } from "./dependencies";

export const alertaRouter = express.Router();
export const notiRouter = express.Router();

alertaRouter.post("/", crearAlertController.run.bind(crearAlertController));
notiRouter.post(
  "/",
  crearNotificacionAlertController.run.bind(crearNotificacionAlertController)
);
