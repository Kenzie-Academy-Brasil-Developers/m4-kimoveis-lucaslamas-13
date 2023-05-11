import { z } from "zod";

const requestLoginSchema = z.object({
  email: z.string().max(45).email(),
  password: z.string().max(120),
});

const responseLoginSchema = z.object({
  token: z.string(),
});

export { requestLoginSchema, responseLoginSchema };
