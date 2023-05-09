import { Repository } from "typeorm"
import { TUsersRequest, TUsersResponse } from "../../interfaces/users.interfaces"
import User from "../../entities/users.entity"
import { AppDataSource } from "../../data-source"
import * as bcrypt from "bcryptjs";
import { userSchemaResponse } from "../../schemas/users.schemas"

const createUsersService = async (userData: TUsersRequest): Promise<TUsersResponse> => {
    userData.password = await bcrypt.hash(userData.password, 10)

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepository.create(userData)
    await userRepository.save(user)

    const returnUser = userSchemaResponse.parse(user)
    
    return returnUser
}

export default createUsersService