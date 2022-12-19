import { type ContentRecord } from 'cms';

export const content: ContentRecord = {
  books: {
    title: 'Books',
    description: 'Book recommendations',
    img: 'https://m.media-amazon.com/images/I/51iqfHOc-ZL.jpg',
    tags: [],
    date: new Date('12-10-2022'),
    items: [
      {
        title: 'Ca$hvertising',
        description: 'Drew Eric Whitman',
        img: 'https://m.media-amazon.com/images/I/51iqfHOc-ZL.jpg',
        tags: ['marketing'],
        date: new Date('12-10-2022'),
      },
      {
        title: 'High Probability Selling',
        description: 'Jacques Werth and Nicholas Ruben',
        img: 'https://m.media-amazon.com/images/I/51D9qULizYL.jpg',
        tags: ['sales'],
        date: new Date('12-11-2022'),
      },
    ],
  },
};
