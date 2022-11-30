import type { FC, ReactNode } from 'react';
import { useTheme, Box, Grid } from '@mui/material';

export interface HeaderProps {
  children?: ReactNode;
  transparent?: boolean;
  home?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ children, transparent, home }) => {
  const theme = useTheme();

  return (
    <Box
      style={{
        backgroundColor: transparent
          ? 'transparent'
          : theme.palette.primary.main,
      }}
      className='text-white'
    >
      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
        style={{
          minHeight: '45px',
        }}
        p={1}
      >
        <Grid item>
          <Box>{home}</Box>
        </Grid>
        <Grid item>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};
