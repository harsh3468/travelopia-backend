import { userService } from "../service/user.service";

export default class UserController {
  /**
   *
   * @param {*} request
   * @param {*} response
   * @returns
   */
  static getUserBookingById = (request, response) => {
    userService.getUserBookingById(request, response);
  };

  /**
   *
   * @param {*} request
   * @param {*} response
   * @returns
   */
  static createUserBooking = (request, response) => {
    userService.createUserBooking(request, response);
  };
}
