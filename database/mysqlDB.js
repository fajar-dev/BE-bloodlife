"user strict";

require("dotenv").config();
const connection = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
};

module.exports = connection;
