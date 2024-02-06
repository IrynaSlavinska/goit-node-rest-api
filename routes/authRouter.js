import express from "express";

import { registerCtrl, loginCtrl } from "../controllers/authController.js";
import { validateBody } from "../helpers/index.js";
import { loginSchema, registerSchema } from "../schemas/usersSchemas.js";

export const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), registerCtrl);

authRouter.post("/login", validateBody(loginSchema), loginCtrl);
