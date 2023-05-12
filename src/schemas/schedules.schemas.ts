import { z } from "zod";

const schedulesSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
});

const schedulesSchemaRequest = schedulesSchema
  .omit({
    id: true,
    user: true,
    realEstate: true,
  })
  .extend({
    realEstateId: z.number(),
  });

export { schedulesSchema, schedulesSchemaRequest };
