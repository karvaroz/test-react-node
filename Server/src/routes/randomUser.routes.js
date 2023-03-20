import { Router } from "express";
import {
	mostUsedLetter,
	personOverAge,
	tenRandomUsers,
} from "../controllers/randomUser.controller.js";

const randomUserRouter = Router();

randomUserRouter.get("/random", tenRandomUsers);
randomUserRouter.get("/random/:age", personOverAge);
randomUserRouter.get("/random-letter", mostUsedLetter);

export default randomUserRouter;
