import { z } from "zod";
import {
  schedulesSchema,
  schedulesSchemaRequest,
} from "../schemas/schedules.schemas";

type TSchedulesResponse = z.infer<typeof schedulesSchema>;
type TSchedulesRequest = z.infer<typeof schedulesSchemaRequest>;

export { TSchedulesResponse, TSchedulesRequest };
