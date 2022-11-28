import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Fullscreen, FullscreenProps } from '.';

export default {
  title: 'Layout/Fullscreen',
  component: Fullscreen,
  parameters: {
    componentSubtitle: 'Fullscreen component',
  },
} as Meta;

export const Default: Story<FullscreenProps> = () => (
  <Fullscreen subtract={60}>Centered Fullscreen</Fullscreen>
);
