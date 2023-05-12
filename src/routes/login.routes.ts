import { Router } from "express";
import { loginUsersController } from "../controllers/login.controllers";
import { ensurebodyIsValidMiddleware } from "../middlewares/ensureBodyIsValid.middlewares";
import { requestLoginSchema } from "../schemas/login.schemas";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensurebodyIsValidMiddleware(requestLoginSchema),
  loginUsersController
);

export { loginRoutes };
