import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box, Grid, useTheme } from '@mui/material';
import { LinkIcon, Caption } from 'ui';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export default {
  title: 'Layout/Footer',
  parameters: {
    componentSubtitle: 'Footer Component',
  },
} as Meta;

export const Footer = ({ transparent }: { transparent?: boolean }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: transparent
          ? 'transparent'
          : theme.palette.primary.main,
        color: '#fff',
      }}
      px={{ md: 3, lg: 6 }}
    >
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        spacing={2}
        sx={{
          minHeight: '120px',
        }}
      >
        <Grid item>
          <LinkIcon
            external
            href='https://github.com/ricardojrmcom'
            icon={<FacebookIcon sx={{ color: '#fff', fontSize: '45px' }} />}
          />
        </Grid>
        <Grid item>
          <LinkIcon
            external
            href='https://github.com/ricardojrmcom'
            icon={<GitHubIcon sx={{ color: '#fff', fontSize: '45px' }} />}
          />
        </Grid>
        <Grid item>
          <LinkIcon
            external
            href='https://github.com/ricardojrmcom'
            icon={<TwitterIcon sx={{ color: '#fff', fontSize: '45px' }} />}
          />
        </Grid>
      </Grid>
      <Box pb={2} pt={1}>
        <Caption align='center'>Copyright © ricardojrmcom 2022</Caption>
      </Box>
    </Box>
  );
};

export const Default: Story = () => {
  return <Footer />;
};
