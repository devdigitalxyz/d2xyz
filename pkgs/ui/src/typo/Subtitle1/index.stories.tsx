import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Subtitle1, Subtitle1Props } from '.';

export default {
  title: 'Typography/Subtitle1',
  component: Subtitle1,
  parameters: {
    componentSubtitle: 'Subtitle1 component',
  },
} as Meta;

export const Default: Story<Subtitle1Props> = () => (
  <Subtitle1>Subtitle1</Subtitle1>
);
