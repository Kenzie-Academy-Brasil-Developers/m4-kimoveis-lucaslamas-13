import { z } from "zod";
import {
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdateResponse,
  usersSchemaResponse,
} from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

type TUsersRequest = z.infer<typeof userSchemaRequest>;
type TUsersResponse = z.infer<typeof userSchemaResponse>;
type TAllUsersResponse = z.infer<typeof usersSchemaResponse>;
type TUserUpdateResponse = z.infer<typeof userSchemaUpdateResponse>;
type TUsersUpdate = DeepPartial<TUserUpdateResponse>;

export { TUsersRequest, TUsersResponse, TAllUsersResponse, TUsersUpdate };
