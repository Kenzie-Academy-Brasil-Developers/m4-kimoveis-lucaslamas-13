import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const ensureIdIsValidMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  if (req.params.id) {
    const category: Category | null = await categoryRepository.findOne({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!category) {
      throw new AppError("Category not found", 404);
    }
  }
  return next();
};

export { ensureIdIsValidMiddlewares };
