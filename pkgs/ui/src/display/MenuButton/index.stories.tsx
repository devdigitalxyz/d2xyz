import React from 'react';
import type { Story, Meta } from '@storybook/react';
import type { MenuButtonProps } from '.';
import { MenuButton } from '.';

export default {
  title: 'Display/Menu Button',
  component: MenuButton,
  parameters: {
    componentSubtitle: 'MenuButton Component',
  },
} as Meta;

export const Default: Story<MenuButtonProps> = () => (
  <MenuButton>MENU</MenuButton>
);
