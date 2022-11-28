import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Body2, Body2Props } from '.';

export default {
  title: 'Typography/Body2',
  component: Body2,
  parameters: {
    componentSubtitle: 'Body2 component',
  },
} as Meta;

export const Default: Story<Body2Props> = () => <Body2>Body2</Body2>;
