import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Caption, CaptionProps } from '.';

export default {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    componentSubtitle: 'Caption component',
  },
} as Meta;

export const Default: Story<CaptionProps> = () => <Caption>Caption</Caption>;
