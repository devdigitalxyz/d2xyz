import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { Socials, type SocialsProps } from '.';

export default {
  title: 'Layout/Socials',
  component: Socials,
  parameters: {
    componentSubtitle: 'Socials Component',
  },
} as Meta;

export const Default: Story<SocialsProps> = () => (
  <div style={{ background: 'black' }}>
    <Socials github twitter />
  </div>
);
