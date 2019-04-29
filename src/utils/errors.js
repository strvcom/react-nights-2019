/* eslint-disable max-classes-per-file */

// Workaround because Babel cannot extend default Error
// https://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax-babel
class CustomError {
  constructor(message) {
    this.name = 'CustomError'
    this.message = message
  }
}

export class AsyncValidationError extends CustomError {}
