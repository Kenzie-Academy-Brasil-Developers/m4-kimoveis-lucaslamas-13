import { Repository } from "typeorm";
import User from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { TAllUsersResponse } from "../../interfaces/users.interfaces";
import { usersSchemaResponse } from "../../schemas/users.schemas";

const listUsersService = async (): Promise<TAllUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User[] = await userRepository.find();

  const returnUsers: TAllUsersResponse = usersSchemaResponse.parse(user);

  return returnUsers;
};

export default listUsersService;
