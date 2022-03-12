import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
  prettyPrint: true,
  base: { pid: false },
  level: process.env.LOG_LEVEL || 'info',
  timestamp: () => `"time": "${dayjs().format()}"`,
});

export { log };
