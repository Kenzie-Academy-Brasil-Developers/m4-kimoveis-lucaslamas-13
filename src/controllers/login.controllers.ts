import { Request, Response } from "express";
import { TLoginRequest, TLoginResponse } from "../interfaces/login.interfaces";
import { loginUsersService } from "../services/login/login.services";

const loginUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TLoginRequest = req.body;
  const user: TLoginResponse = await loginUsersService(userData);

  return res.status(200).json(user);
};

export { loginUsersController };
