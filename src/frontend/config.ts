let baseURL: string = process.env.BASE_FRONTEND_URL || '';
let userName: string = process.env.USER_NAME || '';
let userPassword: string = process.env.USER_PASSWORD || '';

if (!baseURL) {
  throw new Error('BASE_FRONTEND_URL was not set');
}

if (!userName) {
  throw new Error('USER_NAME was not set');
}

if (!userPassword) {
  throw new Error('USER_PASSWORD was not set');
}

export { baseURL, userName, userPassword };
