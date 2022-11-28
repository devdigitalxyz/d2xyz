import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MenuIcon, MenuIconProps } from '.';

export default {
  title: 'Display/Menu Icon',
  component: MenuIcon,
  parameters: {
    componentSubtitle: 'MenuIcon Component',
  },
} as Meta;

export const Default: Story<MenuIconProps> = () => <MenuIcon>MENU</MenuIcon>;
