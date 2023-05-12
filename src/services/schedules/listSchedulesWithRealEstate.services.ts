import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate, Schedule, User } from "../../entities";

const listSchedulesWithRealEstateService = async (
  realEstateId: number
): Promise<object> => {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const address: Address | null = await addressRepository.findOne({
    where: { id: realEstateId },
  });

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category | null = await categoryRepository.findOne({
    where: { id: realEstateId },
  });

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: { id: realEstateId },
  });

  user?.id && user?.createdAt;

  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const schedules: Schedule[] = await schedulesRepository.find({
    relations: {
      user: true,
    },
  });

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate | null = await realEstateRepository.findOne({
    where: { id: realEstateId },
  });

  const allInformation = {
    address: { ...address },
    category: { ...category },
    createdAt: user?.createdAt,
    id: user?.id,
    schedules: [...schedules],
    size: realEstate?.size,
    sold: realEstate?.sold,
    updatedAt: realEstate?.updatedAt,
    value: realEstate?.value,
  };

  return allInformation;
};

export default listSchedulesWithRealEstateService;
