import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { TEMPLATE, type TEMPLATEProps } from '.';

export default {
  title: 'Layout/TEMPLATE',
  component: TEMPLATE,
  parameters: {
    componentSubtitle: 'TEMPLATE Component',
  },
} as Meta;

export const Default: Story<TEMPLATEProps> = () => <TEMPLATE />;
