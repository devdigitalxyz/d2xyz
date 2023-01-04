import {defineField, defineType} from 'sanity'

export const tagGallery = defineType({
  name: 'tagGallery',
  title: 'Gallery Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})
