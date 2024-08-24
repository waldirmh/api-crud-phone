import mongoose from "mongoose";

import { MONGODB_URI } from "../config/index.js";

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("MongoDb connected succesfull");
    } catch (error) {
      console.error("MondoDb connection error :", error.message);
      throw error;
    }
  }

  getConnection() {
    return mongoose.connection;
  }
}

export { Database };
