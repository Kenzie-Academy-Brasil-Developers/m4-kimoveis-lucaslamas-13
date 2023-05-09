import { NextFunction, Request, Response } from "express";

import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { User } from "../entities";

const ensureIdIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User | null = await movieRepository.findOne({
    where: {
        id: Number(req.params.id)
    }
    
  });

  if(!users){
    throw new AppError("User not found", 404)
  }

  return next();
};

export { ensureIdIsValidMiddleware };
