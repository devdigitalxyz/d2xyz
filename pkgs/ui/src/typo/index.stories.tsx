import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { Typography } from '@mui/material';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Body1,
  Body2,
  Subtitle1,
  Subtitle2,
  Caption,
} from '.';

export default {
  title: 'Typography/Index',
  component: H1,
  parameters: {
    componentSubtitle: 'Typography',
  },
} as Meta;

export const Default: Story = () => (
  <div>
    <H1>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
    <H4>H4</H4>
    <H5>H5</H5>
    <H6>H6</H6>
    <Subtitle1>Subtitle1</Subtitle1>
    <Subtitle2>Subtitle2</Subtitle2>
    <Body1>Body1</Body1>
    <Body2>Body2</Body2>
    <Caption>Caption</Caption>
    <div>
      <Typography variant='overline'>Overline</Typography>
    </div>
    <div>
      <Typography variant='button'>Button</Typography>
    </div>
  </div>
);
