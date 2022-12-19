import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { H1 } from '../../typo';
import { Layout, type LayoutProps } from '.';

export default {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    componentSubtitle: 'Layout Component',
  },
} as Meta;

// TODO: Fix Story

export const Default: Story<LayoutProps> = () => {
  return (
    <Layout>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
      <H1 align='center'>@devdigitalxyz</H1>
    </Layout>
  );
};

export const WithBgAlpha: Story<LayoutProps> = () => {
  return (
    <Layout bgVideo='static/vid/devdigitalxyz-bg.mp4' bgAlpha='#000000'>
      <H1 align='center' className='text-white'>
        @devdigitalxyz
      </H1>
    </Layout>
  );
};

export const WithBgGradient: Story<LayoutProps> = () => {
  return (
    <Layout
      bgVideo='static/vid/devdigitalxyz-bg.mp4'
      bgGradient={{
        from: '#1d1c1fea',
        to: '#000000ea',
      }}
    >
      <H1 align='center' className='text-white'>
        @devdigitalxyz
      </H1>
    </Layout>
  );
};
