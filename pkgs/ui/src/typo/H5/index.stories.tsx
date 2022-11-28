import React from 'react';
import { Story, Meta } from '@storybook/react';
import { H5, H5Props } from '.';

export default {
  title: 'Typography/H5',
  component: H5,
  parameters: {
    componentSubtitle: 'H5 component',
  },
} as Meta;

export const Default: Story<H5Props> = () => <H5>H5</H5>;
