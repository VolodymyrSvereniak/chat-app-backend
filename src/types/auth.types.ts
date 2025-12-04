import { z } from "zod";
import { signUpSchema } from "../schemas/auth.schema";
import type { User } from "../generated/prisma/client";

export type SignUpData = z.infer<typeof signUpSchema>;

export type SignUpResponse = Omit<User, "password">;
