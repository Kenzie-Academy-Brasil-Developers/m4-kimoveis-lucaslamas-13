import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const ensureEmailAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieRepository: Repository<User> = AppDataSource.getRepository(User);

  if(req.body.email){
  const user: User | null = await movieRepository.findOne({
    where: {
      email: req.body.email,
    },
  });

  if(user){
    throw new AppError("Email already exists", 409)
  }
}
  return next();
};

export { ensureEmailAlreadyExistsMiddleware };