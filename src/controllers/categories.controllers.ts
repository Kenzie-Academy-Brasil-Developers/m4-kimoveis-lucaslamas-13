import { Request, Response } from "express"
import { TCategoriesRequest } from "../interfaces/categories.interfaces"
import createCategoriesService from "../services/categories/createCategories.services"
import listCategoriesService from "../services/categories/listCategories.services"


const createCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const categoriesData: TCategoriesRequest = req.body 
    const newCategory = await createCategoriesService(categoriesData)

    return res.status(201).json(newCategory)
}

const listCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const categories = await listCategoriesService()
    return res.status(200).json(categories)
}

export {
    createCategoriesController,
    listCategoriesController
}