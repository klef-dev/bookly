import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import express, { Response } from 'express';
import apicache from 'apicache';
import swaggerUI from 'swagger-ui-express';

import { Routes } from './src/routes/api';

import docs from './src/docs';

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

    this.app.use(cache('5 minutes'));

    this.app.use('/api/v1', this.routePrv.routes());
    this.app.use('/docs', swaggerUI.serve, swaggerUI.setup(docs));

    this.app.use('/', (_, res: Response) => {
      res.redirect(301, '/docs');
    });
  }
}

export default new App().app;
