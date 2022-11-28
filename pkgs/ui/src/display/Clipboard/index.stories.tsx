import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Clipboard, ClipboardProps } from '.';

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
