import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities";
import {
  TSchedulesRequest,
  TSchedulesResponse,
} from "../../interfaces/schedules.interfaces";
import { schedulesSchema } from "../../schemas/schedules.schemas";

const createSchedulesService = async (
  categoriesData: TSchedulesRequest
): Promise<TSchedulesResponse> => {
  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const schedules: Schedule = schedulesRepository.create(categoriesData);
  await schedulesRepository.save(schedules);

  const returnSchedules = schedulesSchema.parse(schedules);

  return returnSchedules;
};

export default createSchedulesService;
