import { Repository } from "typeorm"
import { TRealStateRequest, TRealStateResponse } from "../../interfaces/realState.interfaces"
import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { realEstateSchema } from "../../schemas/realEstate.schemas"
import { AppError } from "../../error"

const createRealStateService = async (userData: TRealStateRequest): Promise<TRealStateResponse> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const category: Category | null = await categoryRepository.findOne({
        where: {id : userData.categoryId}
    })

    if(!category){
        throw new AppError("Category not found", 404)
    }

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)

    const verifyAddress: Address | null = await addressRepository.findOneBy({
         ...userData.address, number: userData.address.number || ""
    })

    if(verifyAddress) {
        throw new AppError("Address already exists", 409)
    }

    const address: Address = addressRepository.create(userData.address)
    await addressRepository.save(address)

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstate: RealEstate = realEstateRepository.create(userData)
    await realEstateRepository.save(realEstate)

    realEstate.address.id = address.id
    const realJoinCategory = {...realEstate, category: {...category}}
    console.log(realJoinCategory);
    
    const returnRealEstate = realEstateSchema.parse(realJoinCategory)
    
    return returnRealEstate
}

export default createRealStateService