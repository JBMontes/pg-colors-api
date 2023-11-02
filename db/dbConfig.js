//postgres 
const pgp = require('pg-promise')()
//just gives access to env variable
require("dotenv").config();

//URL builder
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD
};

//Connect to colors_dev db

const db = pgp(cn)

//set up connection to the database
module.exports = db