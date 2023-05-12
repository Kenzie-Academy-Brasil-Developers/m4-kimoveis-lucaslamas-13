import { Request, Response } from "express"
import { TSchedulesRequest } from "../interfaces/schedules.interfaces"
import createSchedulesService from "../services/schedules/createSchedules.services"
import listSchedulesWithRealEstateService from "../services/schedules/listSchedulesWithRealEstate.services"

const createSchedulesController = async (req: Request, res: Response): Promise<Response> => {

    const schedulesData: TSchedulesRequest = req.body 
    
    const newSchedules = await createSchedulesService(schedulesData)

    return res.status(201).json({"message" :"Schedule created"})
}

const listSchedulesWithRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const schedulesId = Number(req.params.id)
    const schedules = await listSchedulesWithRealEstateService(schedulesId)
    return res.status(200).json(schedules)
}

export {
    createSchedulesController,
    listSchedulesWithRealEstateController
}