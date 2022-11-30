import type { Story, Meta } from '@storybook/react';
import { Grid } from '@mui/material';
import { Header, type HeaderProps } from '.';
import { Image, LinkButton, LinkIcon } from '../../display';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    componentSubtitle: 'Header Component',
  },
} as Meta;

const Logo = () => (
  <LinkButton href='/'>
    <Image
      responsive
      alt='Logo'
      src='/static/img/devdigitalxyz-logo-alpha.png'
      sx={{ maxHeight: '30px' }}
    />
  </LinkButton>
);

const Widgets = () => (
  <Grid container alignItems='center' spacing={1}>
    <Grid item>
      <LinkIcon external href='https://github.com/devdigitalxyz'>
        <GitHubIcon sx={{ color: '#fff' }} />
      </LinkIcon>
    </Grid>
    <Grid item>
      <LinkIcon external href='https://twitter.com/devdigitalxyz'>
        <TwitterIcon sx={{ color: '#fff' }} />
      </LinkIcon>
    </Grid>
  </Grid>
);

export const Default: Story<HeaderProps> = () => (
  <Header home={<Logo />}>
    <Widgets />
  </Header>
);

export const Transparent: Story<HeaderProps> = () => (
  <div
    style={{
      background: 'black',
    }}
  >
    <Header home={<Logo />} transparent>
      <Widgets />
    </Header>
  </div>
);
