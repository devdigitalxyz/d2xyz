import React from 'react';
import { Story, Meta } from '@storybook/react';
import { H1, H1Props } from '.';

export default {
  title: 'Typography/H1',
  component: H1,
  parameters: {
    componentSubtitle: 'H1 component',
  },
} as Meta;

export const Default: Story<H1Props> = () => <H1>H1</H1>;
