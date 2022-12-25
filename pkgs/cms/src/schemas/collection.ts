import { defineField, defineType } from 'sanity';

export const collection = defineType({
  name: 'collection',
  type: 'document',
  title: 'Collection',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'external',
      title: 'External Link',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
    }),
    defineField({
      name: 'premium',
      type: 'boolean',
      title: 'Premium',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    }),
    defineField({
      name: 'actions',
      title: 'Actions',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Split on |||',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'item' } }],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      // slug: 'slug',
      description: 'description',
      tags: 'tags',
      body: 'body',
      image: 'image',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
