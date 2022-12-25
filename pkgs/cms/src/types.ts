import type { PortableTextBlock } from '@portabletext/types';

export type CMSTag = {
  _id: string;
  name: string;
};

export type CMSItem = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
  };
  link: string;
  external: string;
  body: [PortableTextBlock];
  image: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
  description: string;
  featured: boolean;
  premium: boolean;
  tags: CMSTag[];
  actions: string[];
};

export type CMSCollection = CMSItem & {
  items: CMSItem[];
};

export type CMSDocument = CMSCollection | CMSItem;
