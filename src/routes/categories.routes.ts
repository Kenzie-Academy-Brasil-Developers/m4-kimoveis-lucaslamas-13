import { Router } from "express";
import { createCategoriesController, listCategoriesController } from "../controllers/categories.controllers";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureAdminIsTrueMiddleware } from "../middlewares/ensureAdminIsTrue.middlewares";
import { ensureCategoriesNameAlreadyExistsMiddleware } from "../middlewares/categories/ensureCategoriesNameAlreadyExists.middleware";

const categoriesRoutes: Router = Router()

categoriesRoutes.post("", ensureTokenIsValidMiddleware, ensureAdminIsTrueMiddleware, ensureCategoriesNameAlreadyExistsMiddleware,createCategoriesController)
categoriesRoutes.get("", listCategoriesController)

export default categoriesRoutes