import React from 'react';
import { Story, Meta } from '@storybook/react';
import { B, BProps } from '.';

export default {
  title: 'Typography/B',
  component: B,
  parameters: {
    componentSubtitle: 'B Component',
  },
} as Meta;

export const Default: Story<BProps> = () => <B>Bold</B>;
