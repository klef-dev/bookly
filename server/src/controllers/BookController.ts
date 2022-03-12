import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { googleBookApi } from '../helpers';

export class BookController {
  public search = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ errors: errors.array({ onlyFirstError: true }) });
    }

    const {
      query,
      limit = 10,
      offset = 0,
    }: { query: string; limit: number; offset: number } = req.query as any;

    try {
      const data = await googleBookApi.get(
        `/volumes?q=${query}
        &maxResults=${limit}&startIndex=${offset}&printType=books&orderBy=relevance&key=${
          process.env.GOOGLE_BOOK_API_KEY || ''
        }`
      );
      return res.status(data.status).json(data.data);
    } catch (error) {
      return res.status(400).json({ error });
    }
  };
}
