import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { Subtitle1Props } from '.';
import { Subtitle1 } from '.';

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
