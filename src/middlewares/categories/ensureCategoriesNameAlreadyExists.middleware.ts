import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const ensureCategoriesNameAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  if (req.body.name) {
    const category: Category | null = await categoryRepository.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (category) {
      throw new AppError("Category already exists", 409);
    }
  }
  return next();
};

export { ensureCategoriesNameAlreadyExistsMiddleware };
