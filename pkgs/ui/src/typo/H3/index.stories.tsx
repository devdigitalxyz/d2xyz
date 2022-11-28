import React from 'react';
import { Story, Meta } from '@storybook/react';
import { H3, H3Props } from '.';

export default {
  title: 'Typography/H3',
  component: H3,
  parameters: {
    componentSubtitle: 'H3 component',
  },
} as Meta;

export const Default: Story<H3Props> = () => <H3>H3</H3>;
