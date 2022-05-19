// get the client
const mysql = require("mysql2");

require("dotenv").config();
console.log(process.env.DATABASE_USER);

const {
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_HOST,
  DATABASE_DB,
} = process.env;

const pool = mysql.createPool({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_DB,
  port: DATABASE_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
