import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { ImageProps } from '.';
import { Image } from '.';

export default {
  title: 'Display/Image',
  component: Image,
  parameters: {
    componentSubtitle: 'Image Component',
  },
} as Meta;

export const Default: Story<ImageProps> = () => (
  <Image src={'/static/img/placeholder.png'} alt='Placeholder' />
);

export const Responsive: Story<ImageProps> = () => (
  <div style={{ maxHeight: '120px' }}>
    <Image src={'/static/img/placeholder.png'} alt='Placeholder' responsive />
  </div>
);
