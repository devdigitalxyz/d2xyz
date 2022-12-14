import { type ContentItemRecord } from '../../hooks/src/useContent';

export const books: ContentItemRecord = {
  cashvertising: {
    title: 'Ca$hvertising',
    description: 'Drew Eric Whitman',
    img: 'https://m.media-amazon.com/images/I/51iqfHOc-ZL.jpg',
    tags: ['Marketing'],
    date: new Date('12-10-2022'),
  },
  'high-selling': {
    title: 'High Probability Selling',
    description: 'Jacques Werth and Nicholas Ruben',
    img: 'https://m.media-amazon.com/images/I/51D9qULizYL.jpg',
    tags: ['Sales'],
    date: new Date('12-11-2022'),
  },
};
