import { Router } from "express";
import { createUsersController } from "../controllers/users.controllers";
import { ensureEmailAlreadyExistsMiddleware } from "../middlewares/ensureEmailAlreadyExists.middlewares";
import { ensurebodyIsValidMiddleware } from "../middlewares/ensureBodyIsValid.middlewares";
import { userSchemaRequest } from "../schemas/users.schemas";

const usersRoutes: Router = Router()

usersRoutes.post('', ensurebodyIsValidMiddleware(userSchemaRequest), ensureEmailAlreadyExistsMiddleware, createUsersController)
usersRoutes.get('',)

export default usersRoutes