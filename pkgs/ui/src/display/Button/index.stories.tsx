import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Display/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button Component',
  },
} as Meta;

export const Default: Story<ButtonProps> = () => <Button>Boop</Button>;
