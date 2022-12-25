import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanity = createClient(config);

const builder = imageUrlBuilder(config);

export const urlFor = (source: string) => {
  return builder.image(source);
};
