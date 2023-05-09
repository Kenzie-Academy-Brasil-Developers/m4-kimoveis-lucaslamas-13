import { Request, Response } from "express";
import createUsersService from "../services/users/createUsers.services";
import { TUsersRequest } from "../interfaces/users.interfaces";
import listUsersService from "../services/users/listUsers.services";

const createUsersController = async (req: Request, res: Response): Promise<Response> => {

    const userData: TUsersRequest = req.body 
    const newUser = await createUsersService(userData)

    return res.status(201).json(newUser)
}

const listMoviesController = async (req: Request, res: Response): Promise<Response> => {

    const users = await listUsersService()
    return res.status(200).json(users)
}

export {
    createUsersController,
   /*  listMoviesController */
}