import React from 'react';
import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';
import { type ParsedUrlQuery } from 'querystring';
import { CMSContentOverview } from 'cms';
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
    value[1].items.forEach((_item, i) => {
      console.log(i + 1);
      paths.push({
        params: {
          slugs: [value[0], `${i + 1}`],
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
    console.log(parseInt(item) - 1);
    const result = slugs ? collections[id].items[parseInt(item) - 1] : {};
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
