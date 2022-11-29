import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { TypographyBaseProps } from '.';
import { TypographyBase } from '.';

export default {
  title: 'Typography/TypographyBase',
  component: TypographyBase,
  parameters: {
    componentSubtitle: 'TypographyBase component',
  },
} as Meta;

export const Default: Story<TypographyBaseProps> = () => (
  <TypographyBase>TypographyBase</TypographyBase>
);
