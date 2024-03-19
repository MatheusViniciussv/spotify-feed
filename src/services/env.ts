import z from 'zod'

const envSchema = z.object({
  VITE_CLIENT: z.string(),
  VITE_CLIENT_SECRET: z.string(),
});

export const env = envSchema.parse(import.meta.env)