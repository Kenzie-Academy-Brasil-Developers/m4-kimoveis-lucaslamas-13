import { Router } from "express";
import { loginUsersController } from "../controllers/login.controllers";
import { ensurebodyIsValidMiddleware } from "../middlewares/ensureBodyIsValid.middlewares";
import { requestLoginSchema } from "../schemas/login.schemas";


const loginRouters: Router = Router();

loginRouters.post("", ensurebodyIsValidMiddleware(requestLoginSchema), loginUsersController);

export { loginRouters };