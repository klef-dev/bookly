import { info, swagger } from './info';
import { bookPaths } from './book';
import * as definitions from './definitions';

const docs = {
  swagger,
  info,
  tags: [
    {
      name: 'Search',
      description: 'Search for books',
    },
  ],
  host:
    process.env.NODE_ENV === 'production'
      ? 'bookily.xyz'
      : `127.0.0.1:${process.env.PORT || 3333}`,
  basePath: '/api/v1',
  schemes: ['https', 'http'],
  paths: {
    ...bookPaths,
  },
  definitions,
};

export default docs;
