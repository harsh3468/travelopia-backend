import { userService } from "../service/user.service";

export default class UserController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  static getUserBookingById = (request, response) => {
    userService.getUserBookingById(request, response);
  };

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  static createUserBooking = async (request, response) => {
    userService.createUserBooking(request, response);
  };
}
