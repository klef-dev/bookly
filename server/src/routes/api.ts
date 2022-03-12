import { Request, Response, Router } from 'express';

// Controller

// Middleware

export class Routes {
  public router: Router = Router();

  public routes(): Router {
    this.router.get('/', (req: Request, res: Response) => {
      res.json({
        message: 'Welcome to Bookly API',
      });
    });

    return this.router;
  }
}
