import z from "zod";

const loginCredentials = z.object({
  email: z.string().email(),
  username: z.string().min(8).max(32),
  password: z.string().min(8).max(32),
  confirmPassword: z.string().min(8).max(32),
});

export { loginCredentials };
