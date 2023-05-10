import { z } from "zod";
import { allCategoriesSchemaResponse, categoriesSchemaRequest, categoriesSchemaResponse } from "../schemas/categories.schemas";

type TCategoriesRequest = z.infer<typeof categoriesSchemaRequest>
type TCategoriesResponse = z.infer<typeof categoriesSchemaResponse>
type TAllCategoriesResponse = z.infer<typeof allCategoriesSchemaResponse>

export {
    TCategoriesRequest,
    TCategoriesResponse,
    TAllCategoriesResponse
}