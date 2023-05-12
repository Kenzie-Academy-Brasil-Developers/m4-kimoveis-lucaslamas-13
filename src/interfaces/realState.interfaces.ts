import { z } from "zod";
import {
  allRealEstateSchema,
  realEstateSchema,
  realEstateSchemaRequest,
} from "../schemas/realEstate.schemas";

type TRealStateRequest = z.infer<typeof realEstateSchemaRequest>;
type TRealStateResponse = z.infer<typeof realEstateSchema>;
type TAllRealState = z.infer<typeof allRealEstateSchema>;

export { TRealStateRequest, TRealStateResponse, TAllRealState };
