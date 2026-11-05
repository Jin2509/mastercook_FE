import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().trim().min(1),
  password: z.string().min(1),
});

export const registerSchema = loginSchema.extend({
  name: z.string().trim().min(1),
});
