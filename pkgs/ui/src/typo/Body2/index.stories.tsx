import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { Body2Props } from '.';
import { Body2 } from '.';

export default {
  title: 'Typography/Body2',
  component: Body2,
  parameters: {
    componentSubtitle: 'Body2 component',
  },
} as Meta;

export const Default: Story<Body2Props> = () => <Body2>Body2</Body2>;
