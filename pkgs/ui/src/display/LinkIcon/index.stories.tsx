import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LinkIcon, LinkIconProps } from '.';

export default {
  title: 'Display/Link Icon',
  component: LinkIcon,
  parameters: {
    componentSubtitle: 'LinkIcon Component',
  },
} as Meta;

export const Internal: Story<LinkIconProps> = () => (
  <LinkIcon href='/?path=/story/display-button--default'>
    Internal link
  </LinkIcon>
);

export const External: Story<LinkIconProps> = () => (
  <LinkIcon href='https://github.com/ricardojrmcom' external>
    External link
  </LinkIcon>
);
