import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { Box, useTheme } from '@mui/material';
import { H1 } from '@d2xyz/ui';
import { Header } from './Header';
import { Footer } from './Footer';
import { hexToRgb } from '@d2xyz/scripts';

export default {
  title: 'Layout/Page Layout',
  parameters: {
    componentSubtitle: 'Story Component',
  },
} as Meta;

// TODO: Fix Story

export const Default: Story = () => {
  const theme = useTheme();
  const { r, g, b } = hexToRgb(theme.palette.primary.main);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Box sx={{ position: 'absolute', width: '100%', left: 0, top: 0 }}>
        <Header />
      </Box>

      <Box sx={{ paddingTop: '120px', paddingBottom: '240px' }}>
        <H1 align='center'>SEPHIROT</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
      </Box>

      <Box sx={{ position: 'absolute', width: '100%', left: 0, bottom: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export const WithBG: Story = () => {
  const theme = useTheme();
  const { r, g, b } = hexToRgb(theme.palette.primary.main);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      {/* bg */}
      <Box
        sx={{
          minHeight: '100%',
          minWidth: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -50,
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            overflow: 'none',
            minHeight: '100%',
            minWidth: '100%',
            position: 'fixed',
            top: -1200,
            left: -750,
          }}
        >
          <source src='/static/v1/vid/landing-mp4.mp4' type='video/mp4' />
        </video>
      </Box>

      {/* fg */}
      <Box
        sx={{
          minHeight: '100%',
          minWidth: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -25,
          backgroundColor: `rgba(${r}, ${g}, ${b}, 0.90)`,
        }}
      ></Box>

      <Box sx={{ position: 'absolute', width: '100%', left: 0, top: 0 }}>
        <Header />
      </Box>

      <Box sx={{ paddingTop: '120px', paddingBottom: '240px' }}>
        <H1 align='center'>SEPHIROT</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
        <H1 align='center'>LAB</H1>
      </Box>

      <Box sx={{ position: 'absolute', width: '100%', left: 0, bottom: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
};
