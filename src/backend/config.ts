let apiBaseURL: string = process.env.BASE_BACKEND_URL || '';

if (!apiBaseURL) {
  throw new Error('BASE_BACKEND_URL was not set');
}

export { apiBaseURL };
