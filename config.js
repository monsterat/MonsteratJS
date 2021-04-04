const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,

  pghost: process.env.POSTGRES_HOST,
  pgport: process.env.POSTGRES_PORT,
  pguser: process.env.POSTGRES_USERNAME,
  pgdatabase: process.env.POSTGRES_DATABASE,
  pgpassword: process.env.POSTGRES_PASSWORD,
};
