import mysql from "mysql2";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    ca: fs.readFileSync("/etc/secrets/isgrootx1.pem"),
  },
});
