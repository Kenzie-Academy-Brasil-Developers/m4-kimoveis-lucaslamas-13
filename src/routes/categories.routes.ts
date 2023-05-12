import { Router } from "express";
import {
  createCategoriesController,
  listCategoriesController,
  listCategoriesWithRealEstateController,
} from "../controllers/categories.controllers";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureAdminIsTrueMiddleware } from "../middlewares/ensureAdminIsTrue.middlewares";
import { ensureCategoriesNameAlreadyExistsMiddleware } from "../middlewares/categories/ensureCategoriesNameAlreadyExists.middleware";
import { ensureIdIsValidMiddlewares } from "../middlewares/categories/ensureIdIsValid.middlewares";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureAdminIsTrueMiddleware,
  ensureCategoriesNameAlreadyExistsMiddleware,
  createCategoriesController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get(
  "/:id/realEstate",
  ensureIdIsValidMiddlewares,
  listCategoriesWithRealEstateController
);

export default categoriesRoutes;
