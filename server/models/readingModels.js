const { Pool } = require("pg");

const PG_URI = "postgres://ykcjffyy:44IQ3SORBerJ3BSHFAldbwsb6NOKX6bC@ruby.db.elephantsql.com:5432/ykcjffyy";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
