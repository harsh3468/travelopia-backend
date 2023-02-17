import { databaseService } from "./database.service.js";

databaseService;
class UserService {
  constructor() {
    console.log("User Service Initialized");
  }

  /**
   *
   * @returns
   */
  static getUserInstance() {
    return new UserService();
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  getUserBookingById = (request, response) => {
    return databaseService.query(
      "SELECT * FROM bookings WHERE id=?",
      [request.params.id],
      (error, result, fields) => {
        if (error) {
          return response.status(400).json({ message: error.sqlMessage });
        }
        return response.status(200).json({ booking: result });
      }
    );
  };

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  createUserBooking = (request, response) => {
    const { name, email, destination, travelers_count, budget, currency } =
      request.body;
    return databaseService.query(
      "INSERT INTO bookings (name,email,destination,travelers_count,budget,currency) VALUES (?,?,?,?,?,?)",
      [name, email, destination, travelers_count, budget, currency],
      (error, result, fields) => {
        if (error) {
          return response.status(400).json({ error: error.sqlMessage });
        }
        return response.status(200).json({ booking: result });
      }
    );
  };
}

export const userService = UserService.getUserInstance();
