import type { Story, Meta } from '@storybook/react';
import { Footer, type FooterProps } from '.';

export default {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    componentSubtitle: 'Footer Component',
  },
} as Meta;

export const Default: Story<FooterProps> = () => (
  <Footer
    copyrightMsg='Copyright © devdigital.xyz 2022'
    socials={{ github: true, twitter: true }}
  />
);

export const Transparent: Story<FooterProps> = () => (
  <div
    style={{
      background: 'black',
    }}
  >
    <Footer
      transparent
      copyrightMsg='Copyright © devdigital.xyz 2022'
      socials={{ github: true }}
    />
  </div>
);
