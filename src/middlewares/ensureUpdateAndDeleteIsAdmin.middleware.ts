import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const ensureUpdateAndDeleteIsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { admin } = res.locals;
  const idToken = Number(res.locals.id);
  const id = Number(req.params.id);

  if (admin === false && idToken !== id) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};

export { ensureUpdateAndDeleteIsAdmin };