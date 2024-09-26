import { z } from "zod";

export const aboutSchema = z.object({
  introduction: z.string().min(1).max(200),
});

export const projectSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(150),
});
