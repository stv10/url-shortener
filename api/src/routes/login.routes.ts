import express from "express";
import { loginController } from "../controllers";

const loginRouter = express.Router();

loginRouter.get("/", loginController.getIndex);

loginRouter.post("/", loginController.login);

export { loginRouter };
