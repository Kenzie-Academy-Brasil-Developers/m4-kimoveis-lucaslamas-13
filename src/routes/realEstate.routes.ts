import { Router } from "express";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureAdminIsTrueMiddleware } from "../middlewares/ensureAdminIsTrue.middlewares";
import { createRealEstateController, listRealEstateController } from "../controllers/realEstate.controllers";
import { ensurebodyIsValidMiddleware } from "../middlewares/ensureBodyIsValid.middlewares";
import { realEstateSchemaRequest } from "../schemas/realEstate.schemas";

const realEstateRoutes: Router = Router();

realEstateRoutes.post("", ensurebodyIsValidMiddleware(realEstateSchemaRequest),ensureTokenIsValidMiddleware, ensureAdminIsTrueMiddleware, createRealEstateController);
realEstateRoutes.get("", listRealEstateController)

export { realEstateRoutes };