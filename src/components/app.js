import express from "express";
import morgan from "morgan";
import  phoneRoutes  from "./phone/phone.routes.js";
class App {
  constructor() {
    this.app = express();
    this.setMiddlewares();
    this.setRoutes();
  }

  setMiddlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  setRoutes() {
    this.app.use("/api/phone", phoneRoutes);
  }
}

const Application = new App().app;

export { Application };
