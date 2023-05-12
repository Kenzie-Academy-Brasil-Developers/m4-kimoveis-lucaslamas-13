import { z } from "zod";

const addressSchema = z.object({
  id: z.number(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).nullish(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const addressSchemaRequest = addressSchema.omit({ id: true });

const realEstateSchema = z.object({
  id: z.number(),
  value: z.number().or(z.string()).default(0),
  size: z.number().positive(),
  address: addressSchema,
  category: z.object({
    id: z.number(),
    name: z.string().max(45),
  }),
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateSchemaRequest = realEstateSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    sold: true,
    category: true,
  })
  .extend({
    address: addressSchemaRequest,
    categoryId: z.number(),
  });

const allRealEstateSchema = z.array(realEstateSchema);

export { realEstateSchema, realEstateSchemaRequest, allRealEstateSchema };
