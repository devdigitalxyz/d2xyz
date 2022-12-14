import React from 'react';
import type { Meta } from '@storybook/react';
import { useContent } from '../../../../hooks/src/useContent';

export default {
  title: 'Layout/Content Management',
  parameters: {
    componentSubtitle: 'ContentManagement Component',
  },
} as Meta;

export const Default = () => {
  const {
    items,
    itemsDisplay,
    filters,
    filtersSet,
    orderBy,
    orderBySet,
    orderDir,
    orderDirSet,
    search,
    searchSet,
    tags,
  } = useContent();

  return <>{JSON.stringify(itemsDisplay)}</>;
};
