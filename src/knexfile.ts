import "./env";

export default {
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  },
  migrations: {
    directory: "migrations",
    tableName: "migrations",
  },
};
