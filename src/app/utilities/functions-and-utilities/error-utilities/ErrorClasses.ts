class ProductNotFoundError extends Error {
  constructor(productId: string) {
    super(`Product with ID "${productId}" not found.`);
    this.name = 'ProductNotFoundError';
  }
}

class CartParseError extends Error {
  constructor(message: string) {
    super(`Failed to parse cart cookie: ${message}`);
    this.name = 'CartParseError';
  }
}

class UnauthorizedError extends Error {
  status = 401;
  constructor(message = 'Unauthorized access.') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

class ForbiddenError extends Error {
  status = 403;
  constructor(message = 'Forbidden.') {
    super(message);
    this.name = 'ForbiddenError';
  }
}


class ValidationError extends Error {
  status = 422;
  constructor(message = 'Validation failed.') {
    super(message);
    this.name = 'ValidationError';
  }
}

export {
  ProductNotFoundError,
  CartParseError,
  UnauthorizedError,
  ForbiddenError,
  ValidationError,
};