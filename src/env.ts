import path from "path";

if (process.env.NODE_ENV === "development") {
  require("dotenv-expand")(
    require("dotenv").config({ path: path.join(__dirname, "..", ".env") })
  );
}
