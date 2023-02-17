import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

class DatabaseService {
  databaseInstance = null;

  /**
   *
   */
  constructor() {
    console.log("Database Initialized");
    this.databaseInstance = mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    this.databaseInstance.connect(function (err) {
      if (err) throw err;
      console.log("Database Connected!");
    });
  }

  /**
   *
   * @returns
   */
  static getDatabaseInstance() {
    return new DatabaseService();
  }
}

export const databaseService = DatabaseService.getDatabaseInstance();
