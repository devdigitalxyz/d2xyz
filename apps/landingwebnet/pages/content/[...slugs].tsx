import React from 'react';
import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';
import { type ParsedUrlQuery } from 'querystring';
import {
  CMSContentOverview,
  type CMSCollection,
  type CMSItem,
} from '@d2xyz/cms';
import { MetaTags } from '@d2xyz/ui/src/utils';
import { PageLayout } from '../../components/PageLayout';
import { sanity } from '../../cfg/sanity';

const querySlugs = `
  *[_type == 'collection']{
    _id,
    slug {
      current
    },
    items[]->{
      _id,
      slug{
        current
      }
    }
  }
`;

const queryCollection = `
  *[_type == 'collection' && slug.current == $slug][0]{
    _id, body, description, featured, premium, 
    publishedAt, slug, link, external, title, video, image{
      asset->{url}
    },
    items[]->{
      _id, body, description, featured, premium, 
      publishedAt, slug, link, external, title, video, image{
        asset->{url}
      },
      tags[]->{name}
    },
    tags[]->{name}
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: (
    | string
    | {
        params: ParsedUrlQuery;
      }
  )[] = [];

  const collections: CMSCollection[] = await sanity.fetch(querySlugs);

  collections.forEach((collection) => {
    paths.push({
      params: {
        slugs: [collection.slug.current],
      },
    });
    if (collection.items) {
      collection.items.forEach((item) => {
        paths.push({
          params: {
            slugs: [collection.slug.current, item.slug.current],
          },
        });
      });
    }
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let result = null;
  let collection = null;

  if (params?.slugs) {
    const slugs = params.slugs as string[];
    if (slugs.length === 1) {
      const coll: CMSCollection = await sanity.fetch(queryCollection, {
        slug: slugs[0],
      });
      result = coll;
    } else if (slugs.length === 2) {
      collection = await sanity.fetch(queryCollection, {
        slug: slugs[0],
      });
      const document = collection.items.find((item: CMSItem) => {
        return item.slug.current === slugs[1];
      });
      result = document;
    }
  }

  if (!result) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }

  return {
    props: { result, collection },
    revalidate: 60,
  };
};

const BlogPage: NextPage = ({
  result,
  collection,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout>
      <MetaTags title={`${result.title} | Landing Web`} />
      <CMSContentOverview item={result} collection={collection} />
    </PageLayout>
  );
};

export default BlogPage;
