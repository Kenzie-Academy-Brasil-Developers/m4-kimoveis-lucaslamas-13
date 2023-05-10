import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"

const listCategoriesService = async (): Promise<Category[]> => {

    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const categories: Category[] = await categoriesRepository.createQueryBuilder().getMany()

    return categories
}

export default listCategoriesService