import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  TUsersResponse,
  TUsersUpdate,
} from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";

const updateUsersService = async (
  userData: TUsersUpdate,
  userId: number
): Promise<TUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...userData,
  });
  await userRepository.save(newUserData);

  const returnUser: TUsersResponse = userSchemaResponse.parse(newUserData);

  return returnUser;
};

export default updateUsersService;
