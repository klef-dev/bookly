import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { googleBookApi } from '../helpers';
import { defaultErrorDto, responseDto } from '../types';

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
      let {
        data: { items, totalItems },
        status,
      }: responseDto = await googleBookApi.get(
        `/volumes?q=${query}
        &maxResults=${limit}&startIndex=${offset}&printType=books&orderBy=relevance&key=${
          process.env.GOOGLE_BOOK_API_KEY || ''
        }`
      );

      items = items.map((item) => {
        const { volumeInfo } = item;
        return {
          volumeInfo: {
            title: volumeInfo.title,
            authors: volumeInfo.authors,
            description: volumeInfo.description,
            imageLinks: { thumbnail: volumeInfo.imageLinks.thumbnail },
            categories: volumeInfo.categories,
            averageRating: volumeInfo?.averageRating,
            ratingsCount: volumeInfo?.ratingsCount,
          },
        };
      });

      return res.status(status).json({ items, totalItems });
    } catch (error) {
      const { message, status } = error as defaultErrorDto;
      return res.status(status).json({ message });
    }
  };
}
