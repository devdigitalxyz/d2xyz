import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { LinkButtonProps } from '.';
import { LinkButton } from '.';

export default {
  title: 'Display/Link Button',
  component: LinkButton,
  parameters: {
    componentSubtitle: 'LinkButton Component',
  },
} as Meta;

export const Internal: Story<LinkButtonProps> = () => (
  <LinkButton href='/?path=/story/display-button--default'>
    Internal link
  </LinkButton>
);

export const External: Story<LinkButtonProps> = () => (
  <LinkButton href='https://github.com/ricardojrmcom' external>
    External link
  </LinkButton>
);

export const Styled: Story<LinkButtonProps> = () => (
  <LinkButton
    href='https://github.com/ricardojrmcom'
    external
    sx={{ color: '#000' }}
  >
    Styled link
  </LinkButton>
);
