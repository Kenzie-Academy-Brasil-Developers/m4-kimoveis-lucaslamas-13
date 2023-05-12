import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { RealEstate, Schedule, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const ensureUserScheduleAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
  const userId = res.locals.id;

  const userScheduleID: Schedule | null = await userRepository
    .createQueryBuilder("schedule")
    .where("schedule.user = :id", { id: userId })
    .andWhere("schedule.date = :date", {date: req.body.date})
    .andWhere("schedule.hour = :hour", { hour: req.body.hour })
    .getOne();

  if (userScheduleID) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }
  return next();
};

export { ensureUserScheduleAlreadyExistsMiddleware };
