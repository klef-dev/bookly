import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import apicache from 'apicache';

import { Routes } from './src/routes/api';
import { log } from './src/helpers';

dotenv.config();

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(express.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(express.urlencoded({ extended: true, limit: '50mb' }));
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(cors());
    const cache = apicache.middleware;

    // this.app.use(cache('5 minutes'));

    const PORT = process.env.PORT || 3333;

    this.app.use('/api/v1', this.routePrv.routes());

    this.app.listen(PORT, () => {
      log.info(`Serving on http://localhost:${PORT} 🚀`);
    });
  }
}

export default new App().app;
