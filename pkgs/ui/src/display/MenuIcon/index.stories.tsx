import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { MenuIconProps } from '.';
import { MenuIcon } from '.';

export default {
  title: 'Display/Menu Icon',
  component: MenuIcon,
  parameters: {
    componentSubtitle: 'MenuIcon Component',
  },
} as Meta;

export const Default: Story<MenuIconProps> = () => <MenuIcon>MENU</MenuIcon>;
