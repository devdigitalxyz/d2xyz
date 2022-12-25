import { type ContentRecord } from '../../../cms';

export const content: ContentRecord = {
  landscapes: {
    title: 'Green Hill Zone',
    description: '',
    publishedAt: new Date('11-01-2022'),
    img: 'https://cdn.midjourney.com/876605b9-ca9a-44be-9f1c-6cf540e00c25/grid_0.png',
    tags: ['landscapes', 'gaming', 'pixel'],
    position: 8000,
    items: [
      {
        title: 'Green Hill Zone #1',
        description: 'asd',
        publishedAt: new Date('11-02-2022'),
        img: 'https://cdn.midjourney.com/876605b9-ca9a-44be-9f1c-6cf540e00c25/grid_0.png',
        tags: ['landscapes', 'gaming', 'pixel'],
        position: 8000,
        actions: [
          ['Test 1', 'https://www.ricardojrm.com/'],
          ['Test 2', 'https://www.ricardojrm.com/'],
        ],
      },
      {
        title: 'Green Hill Zone #2',
        description: '',
        publishedAt: new Date('11-03-2022'),
        external: 'https://www.ricardojrm.com/',
        img: 'https://cdn.midjourney.com/79330e54-4f81-4383-b934-47967e8052b3/grid_0.png',
        tags: ['landscapes', 'gaming', 'pixel'],
        position: 6000,
      },
      {
        title: 'Green Hill Zone #3',
        description: '',
        publishedAt: new Date('11-04-2022'),
        img: 'https://cdn.midjourney.com/570e1d25-2d64-4725-8812-2df44574c49f/grid_0.png',
        tags: ['landscapes', 'gaming', 'pixel'],
        position: 4000,
        slug: '/green-hill-zone-4',
      },
      {
        title: 'Green Hill Zone #4',
        description: '',
        publishedAt: new Date('11-05-2022'),
        img: 'https://cdn.midjourney.com/57ae4750-9b19-486e-bea3-b03a8a3b828c/grid_0.png',
        tags: ['landscapes', 'gaming', 'pixel'],
        position: 2000,
      },
    ],
  },
  characters: {
    title: 'Droop, The Sous-Chef',
    description: 'Droop',
    publishedAt: new Date('12-01-2022'),
    img: 'https://cdn.midjourney.com/ef680370-b3fd-4846-993f-3e210db6fae0/grid_0.png',
    tags: ['characters', 'fantasy'],
    position: 9000,
    items: [
      {
        title: 'Droop, The Sous-Chef #1',
        description:
          'Droop loremDroop loremDroop loremDroop loremDroop loremDroop loremDroop loremDroop loremDroop lorem',
        publishedAt: new Date('12-02-2022'),
        img: 'https://cdn.midjourney.com/ef680370-b3fd-4846-993f-3e210db6fae0/grid_0.png',
        tags: ['characters', 'fantasy'],
        position: 9000,
      },
      {
        title: 'Droop, The Sous-Chef #2',
        description: 'Droop',
        publishedAt: new Date('12-03-2022'),
        img: 'https://cdn.midjourney.com/251b621d-ef93-4456-aee2-cae064d72959/grid_0.png',
        tags: ['characters', 'fantasy'],
        position: 7000,
      },
      {
        title: 'Droop, The Sous-Chef #3',
        description: 'Droop',
        publishedAt: new Date('12-04-2022'),
        img: 'https://cdn.midjourney.com/8cc58b7b-b387-4e57-813e-621f79790abd/grid_0.png',
        tags: ['characters', 'fantasy'],
        position: 5000,
      },
      {
        title: 'Droop, The Sous-Chef #4',
        description: 'Droop',
        publishedAt: new Date('12-05-2022'),
        img: 'https://cdn.midjourney.com/3fd0a561-0cc3-457f-aca1-039603fec478/grid_0.png',
        tags: ['characters', 'fantasy'],

        position: 3000,
      },
    ],
  },
};
