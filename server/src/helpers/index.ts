import logger from 'pino';
import dayjs from 'dayjs';
import axios from 'axios';

const log = logger({
  prettyPrint: true,
  base: { pid: false },
  level: process.env.LOG_LEVEL || 'info',
  timestamp: () => `"time": "${dayjs().format()}"`,
});

// configure google book api
const googleBookApi = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  timeout: 5000,
});

export { log, googleBookApi };
