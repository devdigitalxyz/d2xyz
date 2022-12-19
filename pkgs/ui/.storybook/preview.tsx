import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { UiProvider } from 'ui/src/utils/UiProvider';
import { ContentProvider } from 'cms';
import { content, tags } from 'mocks';

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
      <ContentProvider content={content} tags={tags}>
        {Story()}
      </ContentProvider>
    </UiProvider>
  ),
];
