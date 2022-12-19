import React from 'react';
import type { Meta } from '@storybook/react';
import { CMS } from '../../../cms/src';

export default {
  title: 'CMS/Overlay',
  parameters: {
    componentSubtitle: 'ContentManagement Overlay',
  },
} as Meta;

export const Default = () => <CMS />;
