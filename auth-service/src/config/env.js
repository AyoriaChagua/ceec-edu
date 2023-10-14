import { config } from "dotenv";
config()

export const PORT = process.env.PORT || 3000
export const DB_NAME = process.env.DB_NAME || "ceec"
export const DB_USER = process.env.DB_USER || "ayoria"
export const DB_PASSWORD = process.env.DB_PASSWORD || "123456"
export const DB_HOST = process.env.DB_HOST || "localhost"
export const DB_DIALECT = process.env.DB_DIALECT || "postgres"
export const JWT_SECRET = process.env.JWT_SECRET || "testtoken"