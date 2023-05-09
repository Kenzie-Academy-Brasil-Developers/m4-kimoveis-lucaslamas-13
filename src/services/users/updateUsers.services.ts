import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TUsersResponse, TUsersUpdate } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";

const updateUsersService = async (moviesData: TUsersUpdate, movieId: number): Promise<TUsersResponse> => {

    const movieRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData: User | null = await movieRepository.findOneBy({
        id: movieId
    })
    
    const newUserData: User = movieRepository.create({
        ...oldUserData,
        ...moviesData
    })
    await movieRepository.save(newUserData)

    const returnUser: TUsersResponse = userSchemaResponse.parse(newUserData)

    return returnUser
}

export default updateUsersService