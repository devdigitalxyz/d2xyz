import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { LinkIconProps } from '.';
import { LinkIcon } from '.';

export default {
  title: 'Display/Link Icon',
  component: LinkIcon,
  parameters: {
    componentSubtitle: 'LinkIcon Component',
  },
} as Meta;

export const Internal: Story<LinkIconProps> = () => (
  <LinkIcon
    href='/?path=/story/display-button--default'
    tooltip='Internal link'
  />
);

export const External: Story<LinkIconProps> = () => (
  <LinkIcon
    href='https://github.com/ricardojrmcom'
    external
    tooltip='External link'
  />
);
