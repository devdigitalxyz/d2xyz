import React from 'react';
import { Story, Meta } from '@storybook/react';
import { H4, H4Props } from '.';

export default {
  title: 'Typography/H4',
  component: H4,
  parameters: {
    componentSubtitle: 'H4 component',
  },
} as Meta;

export const Default: Story<H4Props> = () => <H4>H4</H4>;
