import { defineType } from 'sanity';

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'videoId',
      title: 'Video ID',
      type: 'string',
    },
  ],
});
