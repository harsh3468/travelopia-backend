import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { userService } from "./service/user.service.js";
import { databaseService } from "./service/database.service.js";

export default class Server {
  app = express();

  constructor() {
    this.setupCORS();
    this.initGlobalMiddleware();
    this.initDatabase();
    this.initRoutes();
  }

  setupCORS() {
    this.app.use(cors());
  }

  initGlobalMiddleware() {
    this.app.use(bodyParser.json());
  }

  initRoutes() {
    // GET USER BOOKING DETAILS
    this.app.get("/booking/details/:id", userService.getUserBookingById);

    // POST USER BOOKING DETAILS
    this.app.post("/booking/details", userService.createUserBooking);
  }

  initDatabase() {
    databaseService;
  }

  start() {
    // LISTEN INTEGRATED PORT NUMBER
    this.app.listen(process.env.PORT, () => {
      console.log("travelopia server is up!");
    });
  }
}
