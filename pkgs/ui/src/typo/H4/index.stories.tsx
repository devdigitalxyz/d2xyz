import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { H4Props } from '.';
import { H4 } from '.';

export default {
  title: 'Typography/H4',
  component: H4,
  parameters: {
    componentSubtitle: 'H4 component',
  },
} as Meta;

export const Default: Story<H4Props> = () => <H4>H4</H4>;
