export const bookPaths = {
  '/': {
    get: {
      tags: ['Search'],
      summary: 'Search for books',
      description: 'Search for books',
      parameters: [
        {
          in: 'query',
          name: 'query',
          description: 'The search query',
          required: true,
          schema: {
            type: 'string',
          },
        },
        {
          in: 'query',
          name: 'limit',
          description: 'The numbers of items to return',
          schema: {
            type: 'integer',
          },
        },
        {
          in: 'query',
          name: 'offset',
          description:
            'The number of items to skip before starting to collect the result set',
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: {
        200: {
          description: 'Successful operation',
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/BaseResponse',
              },
            },
          },
        },
      },
    },
  },
};
