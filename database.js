const pgp = require("pg-promise")();

const { pghost, pgport, pgdatabase, pguser, pgpassword } = require("./config");

/*const connection = `postgres://${pguser}:${pgpassword}@${pghost}:${pgport}/${pgdatabase}`;

const database = pgp(connection);

module.exports = database;*/

/*let connection;

if (process.env.SSL) {
  connection = {
    connectionString: `postgres://${pguser}:${pgpassword}@${pghost}:${pgport}/${pgdatabase}?ssl=no-verify`,
    ssl: { rejectUnauthorized: false },
  };
} else {
  connection = `postgres://${pguser}:${pgpassword}@${pghost}:${pgport}/${pgdatabase}?ssl=no-verify`;
}

const db = pgp(connection);

module.exports = db;*/

let connection;

if (process.env.SSL) {
  connection = {
    connectionString: `postgres://uycxhusrpwlfcz:c1588efb2888a0537ba1b2b619d221d290b23a9074774f4b8e582c468982b9a3@ec2-54-235-108-217.compute-1.amazonaws.com:5432/dop9112dlgcds?ssl=no-verify`,
    ssl: { rejectUnauthorized: false },
  };
} else {
  connection = `postgres://uycxhusrpwlfcz:c1588efb2888a0537ba1b2b619d221d290b23a9074774f4b8e582c468982b9a3@ec2-54-235-108-217.compute-1.amazonaws.com:5432/dop9112dlgcds?ssl=no-verify`;
}

const db = pgp(connection);

module.exports = db;
/*
//connecting to DB
const { Client } = require('pg');
//getting the credentials
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
//connect
const database = client.connect();
module.exports = database;*/
