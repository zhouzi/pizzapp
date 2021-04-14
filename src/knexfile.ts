import path from "path";

const migrations = {
  directory: path.join(__dirname, "migrations"),
  tableName: "migrations",
};
const development = {
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
  },
  migrations,
};
const production = {
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
  migrations,
};
const configs = {
  development,
  production,
  test: development,
};

export default configs[process.env.NODE_ENV as keyof typeof configs];
