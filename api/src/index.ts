import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { loginRouter } from "./routes";
import cors from "cors";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.use(express.json());

app.use(cors());

app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`Server listening on port`, port);
});
