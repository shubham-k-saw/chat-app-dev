const ERROR = {
  UNAUTHORIZED: {
    CODE: 401,
    MESSAGE: 'unauthorized'
  },
  FORBIDDEN: {
    CODE: 403,
    MESSAGE: 'forbiddedn'
  },
  INTERNAL_SERVER_ERROR: {
    CODE: 500,
    MESSAGE: 'Internal server error'
  },
  SERVICE_UNAVAILABLE: {
    CODE: 503,
    MESSAGE: 'Under maintainance'
  },
}

export { ERROR }