import path from "path";

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  require("dotenv-expand")(
    require("dotenv").config({ path: path.join(__dirname, "..", ".env") })
  );
}
