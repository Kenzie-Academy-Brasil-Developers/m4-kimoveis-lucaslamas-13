import { Router } from "express";
import { ensurebodyIsValidMiddleware } from "../middlewares/ensureBodyIsValid.middlewares";
import { schedulesSchemaRequest } from "../schemas/schedules.schemas";
import {
  createSchedulesController,
  listSchedulesWithRealEstateController,
} from "../controllers/schedules.controllers";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureRealEstateBodyIdAlreadyExistsMiddleware } from "../middlewares/schedules/ensureRealEstateBodyIdAlreadyExists.middlewares";
import { ensureRealEstateScheduleAlreadyExistsMiddleware } from "../middlewares/schedules/ensureRealEstateScheduleAlreadyExists.middlewares";
import { ensureUserScheduleAlreadyExistsMiddleware } from "../middlewares/schedules/ensureUserScheduleAlreadyExists.middlewares";
import { ensureHourAndDayMiddlewares } from "../middlewares/schedules/ensureHourAndDay.middlewares";
import { ensureAdminIsTrueMiddleware } from "../middlewares/ensureAdminIsTrue.middlewares";
import { ensureRealEstateParamsIdAlreadyExistsMiddleware } from "../middlewares/schedules/ensureRealEstateParamsIdAlreadyExists.middleware";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensurebodyIsValidMiddleware(schedulesSchemaRequest),
  ensureRealEstateBodyIdAlreadyExistsMiddleware,
  ensureRealEstateScheduleAlreadyExistsMiddleware,
  ensureUserScheduleAlreadyExistsMiddleware,
  ensureHourAndDayMiddlewares,
  createSchedulesController
);
schedulesRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValidMiddleware,
  ensureAdminIsTrueMiddleware,
  ensureRealEstateParamsIdAlreadyExistsMiddleware,
  listSchedulesWithRealEstateController
);
export { schedulesRoutes };
