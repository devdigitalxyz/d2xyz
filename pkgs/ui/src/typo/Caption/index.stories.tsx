import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { CaptionProps } from '.';
import { Caption } from '.';

export default {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    componentSubtitle: 'Caption component',
  },
} as Meta;

export const Default: Story<CaptionProps> = () => <Caption>Caption</Caption>;
