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
      key = process.env.GOOGLE_BOOK_API_KEY || '',
    }: {
      query: string;
      limit: number;
      offset: number;
      key: string;
    } = req.query as any;

    try {
      let {
        data: { items, totalItems },
        status,
      }: responseDto = await googleBookApi.get(
        `/volumes?q=${query}
        &maxResults=${limit}&startIndex=${offset}&printType=books&orderBy=relevance&key=${key}`
      );

      if (items && items.length) {
        items = items.map((item) => {
          const { volumeInfo } = item;
          return {
            volumeInfo: {
              title: volumeInfo.title,
              authors: volumeInfo.authors,
              description: volumeInfo.description,
              imageLinks: { thumbnail: volumeInfo.imageLinks?.thumbnail },
              categories: volumeInfo.categories,
              averageRating: volumeInfo?.averageRating,
              ratingsCount: volumeInfo?.ratingsCount,
              pageCount: volumeInfo?.pageCount,
              publisher: volumeInfo?.publisher,
              publishedDate: volumeInfo?.publishedDate,
              previewLink: volumeInfo?.previewLink,
            },
          };
        });
      } else {
        items = [];
      }

      return res.status(status).json({
        items,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: offset / limit + 1,
      });
    } catch (error) {
      const { message, response } = error as defaultErrorDto;
      return res.status(response?.status || 500).json({ message });
    }
  };
}
