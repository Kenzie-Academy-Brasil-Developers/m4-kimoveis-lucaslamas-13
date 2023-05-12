import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const ensureRealEstateBodyIdAlreadyExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  
    if(req.body.realEstateId){
    const scheduleRealEstateID: RealEstate | null = await realEstateRepository.findOne({
      where: {
        id: req.body.realEstateId
      },
    });
  
    if(!scheduleRealEstateID){
      throw new AppError("RealEstate not found", 404)
    }
  
  }
    return next();
  };
  
  export { ensureRealEstateBodyIdAlreadyExistsMiddleware };