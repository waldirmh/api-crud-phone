"use strict";
import { Application } from "./components/app.js";
import { PORT } from "./config/index.js";
import { Database } from "./database/index.js";

async function main() {
  try {
    const databaseInstance = new Database();
    await databaseInstance.getConnection();

    Application.listen(PORT);

    console.log(`Api listening  on port  http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);
  }
}
main()