import { z } from "zod";
import { userSchemaRequest, userSchemaResponse } from "../schemas/users.schemas";

type TUsersRequest = z.infer<typeof userSchemaRequest>
type TUsersResponse = z.infer<typeof userSchemaResponse>

export {
    TUsersRequest,
    TUsersResponse
}