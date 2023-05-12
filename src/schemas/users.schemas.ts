import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userSchemaResponse = userSchema.omit({ password: true });

const usersSchemaResponse = z.array(userSchemaResponse);

const updateSchema = z.object({
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const userSchemaUpdateResponse = updateSchema.omit({ password: true });

const updateSchemaRequest = updateSchema.partial();

export {
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
  updateSchema,
  userSchemaUpdateResponse,
  updateSchemaRequest,
};
