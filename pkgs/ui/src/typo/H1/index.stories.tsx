import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { H1Props } from '.';
import { H1 } from '.';

export default {
  title: 'Typography/H1',
  component: H1,
  parameters: {
    componentSubtitle: 'H1 component',
  },
} as Meta;

export const Default: Story<H1Props> = () => <H1>H1</H1>;
