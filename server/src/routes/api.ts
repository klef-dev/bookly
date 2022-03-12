import { Router } from 'express';

// Controller
import { BookController } from '../controllers';

// Middleware
import { searchRequest } from '../middleware';

export class Routes {
  public router: Router = Router();

  private bookController = new BookController();

  public routes(): Router {
    this.router.get('/', searchRequest(), this.bookController.search);

    return this.router;
  }
}
