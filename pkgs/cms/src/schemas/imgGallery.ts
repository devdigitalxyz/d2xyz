import { defineType } from 'sanity';

export const imgGallery = defineType({
  name: 'imgGallery',
  title: 'Gallery Image',
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
