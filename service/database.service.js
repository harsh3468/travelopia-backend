import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

class DatabaseService {

  constructor() {
    console.log("Database Service Initialized");

    // INITIALIZE DB INSTANCE
    const databaseInstance = mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // CREATE DB CONNECTION
    databaseInstance.connect(function (err) {
      if (err) throw err;
      console.log("Database Service Connected!");
    });
    return databaseInstance;
  }

  /**
   *INITIALIZE DB INSTANCE
   * @returns
   */
  static getDatabaseInstance() {
    return new DatabaseService();
  }
}

export const databaseService = DatabaseService.getDatabaseInstance();
