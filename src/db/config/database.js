import dotenv from "dotenv";
import path from "path";

const envFound = dotenv.config({ path: path.resolve("../.env") });
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const development = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT,
};
const test = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_TEST,
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT,
};
const production = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_PRODUCTION,
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT,
};

const database = {
  development: development,
  test: test,
  production: production,
};

export default database;