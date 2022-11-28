import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { Body1Props } from '.';
import { Body1 } from '.';

export default {
  title: 'Typography/Body1',
  component: Body1,
  parameters: {
    componentSubtitle: 'Body1 component',
  },
} as Meta;

export const Default: Story<Body1Props> = () => <Body1>Body1</Body1>;
