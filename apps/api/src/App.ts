import express, { type Application as ExpressApp } from "express";
import { type Server as HttpServer } from "http";
import compression from "compression";
// import { type Mongoose, connect as connectToMongodb } from "@/mongodb";

import { port } from "./config";
import { api } from "./api";

export default class App {
  public express: ExpressApp;
  public httpServer?: HttpServer;
  //   public mongoose?: Mongoose;

  constructor() {
    this.express = express();
    this.express.use(compression());
    this.express.use("/api", api);
  }

  async start() {
    // this.mongoose = await connectToMongodb(mongodbUri);

    // console.log(`Connected to MongoDB: ${mongodbUri}`);

    this.httpServer = this.express.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }

  async stop() {
    // if (this.mongoose) {
    //   console.log("Disconnecting from MongoDB");
    //   await this.mongoose?.disconnect();
    // }

    if (this.httpServer) {
      console.log("Stopping the HTTP server");
      this.httpServer?.close();
    }
  }
}
