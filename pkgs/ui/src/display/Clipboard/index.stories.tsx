import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { ClipboardProps } from '.';
import { Clipboard } from '.';

export default {
  title: 'Display/Clipboard',
  component: Clipboard,
  parameters: {
    componentSubtitle: 'Clipboard Component',
  },
} as Meta;

export const Default: Story<ClipboardProps> = () => (
  <Clipboard value='Boop'>Boop</Clipboard>
);
