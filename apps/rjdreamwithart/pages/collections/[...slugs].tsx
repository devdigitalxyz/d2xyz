import React from 'react';
import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';
import { type ParsedUrlQuery } from 'querystring';
import { CMSContentOverview } from '@d2xyz/cms';
import { PageLayout } from '../../components/PageLayout';
import { collections } from '../../content/collections';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: (
    | string
    | {
        params: ParsedUrlQuery;
      }
  )[] = [];

  // only collections
  Object.entries(collections).forEach((value) => {
    paths.push({
      params: {
        slugs: [value[0]],
      },
    });
  });

  // items
  Object.entries(collections).forEach((value) => {
    Object.entries(value[1].items || {}).forEach((item) => {
      const slugs = [value[0], `${item[0]}`];
      paths.push({
        params: {
          slugs,
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slugs } = context?.params ?? {};
  const id = (slugs ?? [])[0];
  const item = (slugs ?? [])[1];
  if (item) {
    // TODO: Fix TS Error
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = slugs ? collections[id].items[item] : {};
    return {
      props: { result },
    };
  }
  const result = slugs ? collections[id] : {};
  return {
    props: { result },
  };
};

const CollectionPage: NextPage = ({
  result,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout>
      <CMSContentOverview item={result} />
    </PageLayout>
  );
};

export default CollectionPage;
