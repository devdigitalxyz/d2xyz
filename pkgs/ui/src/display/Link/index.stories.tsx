import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Link, LinkProps } from '.';

export default {
  title: 'Display/Link',
  component: Link,
  parameters: {
    componentSubtitle: 'Link Component',
  },
} as Meta;

export const Internal: Story<LinkProps> = () => (
  <Link href='/?path=/story/display-button--default'>Internal link</Link>
);

export const External: Story<LinkProps> = () => (
  <Link href='https://github.com/ricardojrmcom' external>
    External link
  </Link>
);

export const Styled: Story<LinkProps> = () => (
  <Link
    href='https://github.com/ricardojrmcom'
    external
    sx={{ color: '#000', textDecoration: 'none' }}
    title='Title'
  >
    Styled link
  </Link>
);
