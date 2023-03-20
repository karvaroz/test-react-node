import { Router } from "express";
import {
	fastestShip,
	planetByTerrain,
} from "../controllers/swapi.controller.js";

const swapiRouter = Router();

swapiRouter.get("/swapi-ship/:passangers", fastestShip);
swapiRouter.get("/swapi-planet/:terrain", planetByTerrain);

export default swapiRouter;
