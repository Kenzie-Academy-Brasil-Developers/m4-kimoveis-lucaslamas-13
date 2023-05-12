import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const ensureUserScheduleAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const userId = res.locals.id;

  const userScheduleId: Schedule | null = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.user = :id", { id: userId })
    .andWhere("schedule.date = :date", { date: req.body.date })
    .andWhere("schedule.hour = :hour", { hour: req.body.hour })
    .getOne();

  if (userScheduleId) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }
  return next();
};

export { ensureUserScheduleAlreadyExistsMiddleware };
