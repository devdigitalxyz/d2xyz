import type { FC, ReactNode } from 'react';
import { useTheme, Box, Grid } from '@mui/material';
import { Caption } from 'ui';

export interface FooterProps {
  children?: ReactNode;
  transparent?: boolean;
  copyrightMsg?: string;
}

export const Footer: FC<FooterProps> = ({
  children,
  transparent,
  copyrightMsg,
}) => {
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
        justifyContent='center'
        style={{
          minHeight: '69px',
        }}
      >
        {children && (
          <Grid item xs={12}>
            <Box>{children}</Box>
          </Grid>
        )}
        <Grid item>
          <Box>
            <Caption sx={{ color: 'white' }}>{copyrightMsg}</Caption>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
