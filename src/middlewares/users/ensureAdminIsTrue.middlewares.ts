import { NextFunction, Request, Response } from "express";
import { AppError } from "../../error";

const ensureAdminIsTrueMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { admin } = res.locals;

  if (admin === false) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};

export { ensureAdminIsTrueMiddleware };
