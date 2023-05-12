import { NextFunction, Request, Response } from "express";
import { AppError } from "../../error";

const ensureHourAndDayMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const hour = String(req.body.hour).substring(0, 2);
  const numberHour = Number(hour);

  if (numberHour > 18 || numberHour < 8) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const date = new Date(req.body.date).getDay();
  const numberDate = Number(date);

  if (numberDate === 6 || numberDate === 7) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  return next();
};

export { ensureHourAndDayMiddlewares };
