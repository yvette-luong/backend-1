// Update with your config settings.
require("dotenv").config(); //access to .env variables
const pgConnection = process.env.DATABASE_URL;
module.exports = {

  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/expat.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      },
    },
  },

    staging: {
      client: "postgresql",
      connection: {
        database: "my_db",
        user: "username",
        password: "password",
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: "knex_migrations",
      },
    },

    production: {
      connection: pgConnection,
      useNullAsDefault: true,
      client: 'postgresql',
      // client: "pg",
      migrations: {
        directory: "./data/migrations",
      },
      seeds: {
        directory: "./data/seeds",
      },
      // connection: {
      //   database: "my_db",
      //   user: "username",
      //   password: "password",
      // },
      pool: {
        min: 2,
        max: 10,
      },
    },
  }

