import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

import randomUserRouter from "./routes/randomUser.routes.js";
import swapiRouter from "./routes/swapi.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

app.use("/", randomUserRouter);
app.use("/", swapiRouter);
