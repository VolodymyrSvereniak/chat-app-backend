import jwt from "jsonwebtoken";
import { env } from "../lib/env";

export const generateToken = (payload: object) => {
  if (!env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  return jwt.sign(payload, env.JWT_SECRET!, {
    expiresIn: "1d",
  });
};
