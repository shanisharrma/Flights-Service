const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      "Flight Number not found in the incoming request in the correct form",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      "airplaneId not found in the incoming request in the correct form",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      "departureAirportId not found in the incoming request in the correct form",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      "arrivalAirportId not found in the incoming request in the correct form",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      "departureTime not found in the incoming request in the correct form",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      "arrivalTime not found in the incoming request in the correct form",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      "price not found in the incoming request in the correct form",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      "totalSeats not found in the incoming request in the correct form",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

function validateUpdateRequest(req, res, next) {
  if (
    !req.body.flightNumber &&
    !req.body.airplaneId &&
    !req.body.departureAirportId &&
    !req.body.arrivalAirportId &&
    !req.body.departureTime &&
    !req.body.arrivalTime &&
    !req.body.price &&
    !req.body.totalSeats
  ) {
    ErrorResponse.message = "Something went wrong while updating flight";
    ErrorResponse.error = new AppError(
      "No data found in the incoming request",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

function validateUpdateSeatRequest(req, res, next) {
  if (!req.body.seats) {
    ErrorResponse.message = "Something went wrong while updating flight";
    ErrorResponse.error = new AppError(
      "No Of Seats not found in the incoming request in the correct form",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
  validateUpdateRequest,
  validateUpdateSeatRequest,
};
