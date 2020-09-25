import { Router } from "express";
import AnyController from "./controllers/AnyController";

const route = Router();

route.get("/", AnyController.index);

export { route };
