import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { TCategoriesRequest, TCategoriesResponse } from "../../interfaces/categories.interfaces"
import { Category } from "../../entities"
import { categoriesSchemaResponse } from "../../schemas/categories.schemas"

const createCategoriesService = async (categoriesData: TCategoriesRequest): Promise<TCategoriesResponse> => {
  

    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const categories: Category = categoriesRepository.create(categoriesData)
    await categoriesRepository.save(categories)

    const returnCategories = categoriesSchemaResponse.parse(categories)
    
    return returnCategories
}

export default createCategoriesService