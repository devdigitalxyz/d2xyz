import React from 'react';
import Head from 'next/head';

export interface MetaTagsProps {
  author?: string;
}

export const MetaTags = ({ author }: MetaTagsProps) => {
  return (
    <Head>
      <meta name='viewport' content='initial-scale=1, width=device-width' />

      <link rel='icon' type='image/png' href='/static/v1/img/placeholder.png' />

      {author && <meta name='author' content={author} />}

      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
    </Head>
  );
};
