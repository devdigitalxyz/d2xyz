import type { ReactNode } from 'react';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

/**
 * Fullscreen props
 */
export interface FullscreenProps {
  children?: ReactNode;
  subtract?: number;
}

/**
 * Fullscreen
 */
export const Fullscreen = ({ children, subtract = 0 }: FullscreenProps) => (
  <Grid
    container
    sx={{
      minHeight: `calc(100vh - ${subtract}px)`,
    }}
    alignContent='center'
  >
    <Grid
      item
      xs={12}
      container
      sx={{
        minHeight: `calc(100vh - ${subtract}px)`,
      }}
      alignContent='center'
    >
      <Grid
        item
        xs={12}
        container
        alignItems={'center'}
        alignContent='center'
        justifyContent={'center'}
      >
        <Box>{children}</Box>
      </Grid>
    </Grid>
  </Grid>
);
