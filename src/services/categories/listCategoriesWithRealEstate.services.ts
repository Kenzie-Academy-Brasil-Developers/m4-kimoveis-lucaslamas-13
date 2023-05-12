import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

const listCategoriesWithRealEstateService = async (
  categoriesId: number
): Promise<Category | null> => {
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories: Category | null = await categoriesRepository.findOne({
    where: { id: categoriesId },
    relations: {
      realEstate: true,
    },
  });

  return categories;
};

export default listCategoriesWithRealEstateService;
