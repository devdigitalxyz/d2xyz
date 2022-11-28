import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { FullscreenProps } from '.';
import { Fullscreen } from '.';

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
