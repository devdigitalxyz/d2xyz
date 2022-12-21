import { type ContentRecord } from 'cms';

export const tags = { tags: ['fantasy', 'character', 'scholar'] };

export const collections: ContentRecord = {
  'the-cleric': {
    title: 'The Cleric',
    description: '',
    date: new Date('11-01-2022').toISOString(),
    img: 'https://cdn.midjourney.com/c50954b6-a2c9-4e54-9ea9-14242bfdf9fc/grid_0.png',
    tags: ['fantasy', 'character', 'scholar'],
    position: 10000,
    link: '/collections/the-cleric',
    actions: [
      ['4K Resolution', 'https://ricardojrmcom.gumroad.com/l/the-cleric-4k'],
    ],
    items: [
      {
        title: 'The Cleric #1',
        description: '',
        date: new Date('11-01-2022').toISOString(),
        img: 'https://cdn.midjourney.com/c50954b6-a2c9-4e54-9ea9-14242bfdf9fc/grid_0.png',
        tags: ['fantasy', 'character', 'scholar', 'male'],
        link: '/collections/the-cleric/1',
        position: 10000,
        actions: [
          [
            '4K Resolution',
            'https://ricardojrmcom.gumroad.com/l/the-cleric-4k',
          ],
        ],
      },
      {
        title: 'The Cleric #2',
        description: '',
        date: new Date('11-01-2022').toISOString(),
        img: 'https://cdn.midjourney.com/5ef55d1a-a2bd-4f36-a4eb-7c081bec7857/grid_0.png',
        tags: ['fantasy', 'character', 'scholar', 'female'],
        link: '/collections/the-cleric/2',
        position: 10000,
        actions: [
          [
            '4K Resolution',
            'https://ricardojrmcom.gumroad.com/l/the-cleric-4k',
          ],
        ],
      },
      {
        title: 'The Cleric #3',
        description: '',
        date: new Date('11-01-2022').toISOString(),
        img: 'https://cdn.midjourney.com/a8228016-4230-48ff-a4f4-7690d6f3c9f5/grid_0.png',
        tags: ['fantasy', 'character', 'scholar', 'male'],
        link: '/collections/the-cleric/3',
        position: 10000,
        actions: [
          [
            '4K Resolution',
            'https://ricardojrmcom.gumroad.com/l/the-cleric-4k',
          ],
        ],
      },
    ],
  },
};
