import { defineType } from 'sanity';

export const imgBlog = defineType({
  name: 'imgBlog',
  title: 'Blog Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
});
