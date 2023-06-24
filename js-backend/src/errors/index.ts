const ERRORS = {
  BAD_REQUEST: {
    status: 400,
    message: "The request sent by the client is invalid or malformed.",
  },

  UNAUTHORIZED: {
    status: 401,
    message:
      "The client is not authenticated and lacks valid credentials to access the requested resource.",
  },

  FORBIDDEN: {
    status: 403,
    message:
      "The client is authenticated but does not have permission to access the requested resource.",
  },

  NOT_FOUND: {
    status: 404,
    message: "The requested resource could not be found on the server.",
  },

  METHOD_NOT_ALLOWED: {
    status: 405,
    message: "The requested HTTP method is not allowed for the given resource.",
  },

  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: "An unexpected error occurred on the server.",
  },

  RATE_LIMIT_EXCEEDED: {
    status: 429,
    message:
      "Too Many Requests. Please try again after some time. You have exceeded the maximum rate limit of ${rateLimit} requests per ${timeFrame}.",
  },
} as const;

export type ErrorTypes = keyof typeof ERRORS;

export const getErrorInfo = (type: ErrorTypes) => {
  return ERRORS[type];
};
