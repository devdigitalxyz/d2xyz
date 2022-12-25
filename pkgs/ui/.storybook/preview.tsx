import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { UiProvider } from '@d2xyz/ui/src/utils/UiProvider';
import { ContentProvider } from '@d2xyz/cms';
import { content, tags } from '@d2xyz/mocks';

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
      <ContentProvider content={content} tags={tags} lsid='sb-demo-d2xyz'>
        {Story()}
      </ContentProvider>
    </UiProvider>
  ),
];
