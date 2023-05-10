import { Router } from "express";
import {
  createUsersController,
  deleteUsersController,
  listUsersController,
  updateUsersController,
} from "../controllers/users.controllers";
import { ensureEmailAlreadyExistsMiddleware } from "../middlewares/users/ensureEmailAlreadyExists.middlewares";
import { ensurebodyIsValidMiddleware } from "../middlewares/ensureBodyIsValid.middlewares";
import {
  updateSchemaRequest,
  userSchemaRequest,
} from "../schemas/users.schemas";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureAdminIsTrueMiddleware } from "../middlewares/ensureAdminIsTrue.middlewares";
import { ensureUpdateAndDeleteIsAdmin } from "../middlewares/ensureUpdateAndDeleteIsAdmin.middleware";
import { ensureIdIsValidMiddleware } from "../middlewares/users/ensureUserIdIsValid.middlewares";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensurebodyIsValidMiddleware(userSchemaRequest),
  ensureEmailAlreadyExistsMiddleware,
  createUsersController
);
usersRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureAdminIsTrueMiddleware,
  listUsersController
);
usersRoutes.patch(
  "/:id",
  ensurebodyIsValidMiddleware(updateSchemaRequest),
  ensureTokenIsValidMiddleware,
  ensureIdIsValidMiddleware,
  ensureUpdateAndDeleteIsAdmin,
  ensureEmailAlreadyExistsMiddleware,
  updateUsersController
);
usersRoutes.delete(
  "/:id",
  ensureIdIsValidMiddleware,
  ensureTokenIsValidMiddleware,
  ensureAdminIsTrueMiddleware,
  deleteUsersController
);

export default usersRoutes;
