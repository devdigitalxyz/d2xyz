import type { Story, Meta } from '@storybook/react';
import { Header, type HeaderProps } from '.';

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    componentSubtitle: 'Header Component',
  },
} as Meta;

export const Default: Story<HeaderProps> = () => (
  <Header copyrightMsg='Copyright © devdigital.xyz 2022' />
);

export const Transparent: Story<HeaderProps> = () => (
  <div
    style={{
      background: 'black',
    }}
  >
    <Header transparent copyrightMsg='Copyright © devdigital.xyz 2022' />
  </div>
);

export const WithChildren: Story<HeaderProps> = () => (
  <Header copyrightMsg='Copyright © devdigital.xyz 2022'>
    <div>CHILD</div>
  </Header>
);
