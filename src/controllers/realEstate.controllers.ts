import { Request, Response } from "express";
import { TRealStateRequest } from "../interfaces/realState.interfaces";
import createRealStateService from "../services/realEstate/createRealEstate.services";
import listRealEstateService from "../services/realEstate/listRealEstate.services";

const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TRealStateRequest = req.body;
  const newUser = await createRealStateService(userData);

  return res.status(201).json(newUser);
};

const listRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await listRealEstateService();

  return res.status(200).json(newUser);
};

export { createRealEstateController, listRealEstateController };
