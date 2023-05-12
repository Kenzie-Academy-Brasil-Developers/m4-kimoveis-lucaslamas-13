import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { RealEstate, Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const ensureRealEstateScheduleAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

    const realEstateScheduleID: Schedule | null = await schedulesRepository
      .createQueryBuilder("schedule")
      .where("schedule.realEstate = :id", { id: req.body.realEstateId })
      .andWhere("schedule.date = :date", { date: req.body.date })
      .andWhere("schedule.hour = :hour", { hour: req.body.hour })
      .getOne();
      

    if (realEstateScheduleID) {
      throw new AppError(
        "Schedule to this real estate at this date and time already exists",
        409
      );
    }
  
  return next();
};

export { ensureRealEstateScheduleAlreadyExistsMiddleware };
