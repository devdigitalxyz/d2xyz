import React from 'react';
import type { Meta } from '@storybook/react';
import { CMS, CMSContentOverview } from '../../../cms/src';
import { content } from 'mocks';

export default {
  title: 'CMS/Overlay',
  parameters: {
    componentSubtitle: 'ContentManagement Overlay',
  },
} as Meta;

export const Layout = () => <CMS />;

export const Overview = () => (
  <CMSContentOverview item={content.landscapes.items[0]} />
);
