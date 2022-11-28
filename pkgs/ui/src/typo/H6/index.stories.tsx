import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { H6Props } from '.';
import { H6 } from '.';

export default {
  title: 'Typography/H6',
  component: H6,
  parameters: {
    componentSubtitle: 'H6 component',
  },
} as Meta;

export const Default: Story<H6Props> = () => <H6>H6</H6>;
