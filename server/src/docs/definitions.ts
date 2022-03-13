export const BaseResponse = {
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          volumeInfo: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                description: 'The title of the book',
              },
              authors: {
                type: 'array',
                items: {
                  type: 'string',
                  description: 'The authors of the book',
                },
              },
              publisher: {
                type: 'string',
                description: 'The publisher of the book',
              },
              publishedDate: {
                type: 'string',
                description: 'The date the book was published',
              },
              description: {
                type: 'string',
                description: 'The description of the book',
              },
              imageLinks: {
                type: 'object',
                properties: {
                  thumbnail: {
                    type: 'string',
                    description: 'The thumbnail of the book',
                  },
                },
              },
            },
          },
        },
      },
    },
    totalPages: {
      type: 'integer',
      description: 'The total number of pages',
    },
    currentPage: {
      type: 'integer',
      description: 'The current page',
    },
  },
};
