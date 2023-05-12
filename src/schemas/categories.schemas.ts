import { z } from "zod";

const categoriesSchemaResponse = z.object({
  id: z.number(),
  name: z.string().max(45),
});

const categoriesSchemaRequest = categoriesSchemaResponse.omit({ id: true });

const allCategoriesSchemaResponse = z.array(categoriesSchemaResponse);

export {
  categoriesSchemaResponse,
  categoriesSchemaRequest,
  allCategoriesSchemaResponse,
};
