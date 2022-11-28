import React from 'react';
import { Story, Meta } from '@storybook/react';
import { H2, H2Props } from '.';

export default {
  title: 'Typography/H2',
  component: H2,
  parameters: {
    componentSubtitle: 'H2 component',
  },
} as Meta;

export const Default: Story<H2Props> = () => <H2>H2</H2>;
