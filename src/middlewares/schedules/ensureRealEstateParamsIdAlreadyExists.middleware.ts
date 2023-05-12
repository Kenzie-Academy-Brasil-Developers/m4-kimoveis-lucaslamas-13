import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const ensureRealEstateParamsIdAlreadyExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const scheduleRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  
    const scheduleRealEstateID: RealEstate | null = await scheduleRepository.findOne({
      where: {
        id: Number(req.params.id)
      },
    });
  
    if(!scheduleRealEstateID){
      throw new AppError("RealEstate not found", 404)
    }
  
  
    return next();
  };
  
  export { ensureRealEstateParamsIdAlreadyExistsMiddleware };