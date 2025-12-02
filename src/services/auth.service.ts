import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import type { SignUpData } from "../types/auth.types";

export const registerUser = async ({
  fullName,
  email,
  password,
}: SignUpData) => {
  const existedUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existedUser) {
    throw new Error("User with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
    },
    omit: { password: true },
  });

  return {
    user,
  };
};
