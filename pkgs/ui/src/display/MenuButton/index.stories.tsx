import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MenuButton, MenuButtonProps } from '.';

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
