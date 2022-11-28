import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { Subtitle2Props } from '.';
import { Subtitle2 } from '.';

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
