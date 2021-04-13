import path from "path";
import "./env";

const migrations = {
  directory: path.join(__dirname, "migrations"),
  tableName: "migrations",
};
const configs = {
  development: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
    migrations,
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations,
  },
  test: {
    client: "sqlite3",
    connection: ":memory:",
    useNullAsDefault: true,
    migrations,
  },
};

export default configs[process.env.NODE_ENV as keyof typeof configs];
