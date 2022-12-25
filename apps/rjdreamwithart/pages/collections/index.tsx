import React from 'react';
import type { NextPage } from 'next';
import { ContentProvider } from '@d2xyz/cms';
import { CollectionsView } from '../../views';
import { collections, tags } from '../../content/collections';

const CollectionsPage: NextPage = () => {
  return (
    <ContentProvider content={collections} tags={tags} lsid='rjdwa-collections'>
      <CollectionsView />
    </ContentProvider>
  );
};

export default CollectionsPage;
