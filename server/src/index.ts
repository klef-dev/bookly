import dotenv from 'dotenv';
import app from '../app';
import { log } from '../src/helpers';

dotenv.config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  log.info(`Serving on http://localhost:${PORT} 🚀`);
});
