import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { H3Props } from '.';
import { H3 } from '.';

export default {
  title: 'Typography/H3',
  component: H3,
  parameters: {
    componentSubtitle: 'H3 component',
  },
} as Meta;

export const Default: Story<H3Props> = () => <H3>H3</H3>;
