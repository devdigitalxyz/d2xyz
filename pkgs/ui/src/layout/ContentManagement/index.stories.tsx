import React from 'react';
import type { Meta } from '@storybook/react';
import { CMS } from 'cms';

export default {
  title: 'CMS/Component',
  parameters: {
    componentSubtitle: 'ContentManagement Component',
  },
} as Meta;

export const Default = () => <CMS />;
