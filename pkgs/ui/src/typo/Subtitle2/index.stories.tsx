import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Subtitle2, Subtitle2Props } from '.';

export default {
  title: 'Typography/Subtitle2',
  component: Subtitle2,
  parameters: {
    componentSubtitle: 'Subtitle2 component',
  },
} as Meta;

export const Default: Story<Subtitle2Props> = () => (
  <Subtitle2>Subtitle2</Subtitle2>
);
