import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { UiProvider } from 'ui/src/utils/UiProvider';
import { ContentProvider } from '../../hooks/src/useContent';
import { books } from '../mocks/books';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <UiProvider>
      <ContentProvider items={books} tags={['marketing', 'sales']}>
        {Story()}
      </ContentProvider>
    </UiProvider>
  ),
];
