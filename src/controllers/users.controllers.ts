import { Request, Response } from "express";
import createUsersService from "../services/users/createUsers.services";
import { TUsersRequest, TUsersUpdate } from "../interfaces/users.interfaces";
import listUsersService from "../services/users/listUsers.services";
import updateUsersService from "../services/users/updateUsers.services";
import deleteUsersService from "../services/users/deleteUsers.service";

const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUsersRequest = req.body;
  const newUser = await createUsersService(userData);

  return res.status(201).json(newUser);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listUsersService();
  return res.status(200).json(users);
};

const updateUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const usersData: TUsersUpdate = req.body;
  const usersId: number = Number(req.params.id);

  const newUsersData = await updateUsersService(usersData, usersId);
  return res.json(newUsersData);
};

const deleteUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const usersId: number = Number(req.params.id);

  await deleteUsersService(usersId);

  return res.status(204).send();
};

export {
  createUsersController,
  listUsersController,
  updateUsersController,
  deleteUsersController,
};
