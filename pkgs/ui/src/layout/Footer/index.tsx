import type { FC } from 'react';
import { useTheme, Box, Grid } from '@mui/material';
import { Body2 } from 'ui';
import { Socials } from '../Socials';

export interface FooterProps {
  transparent?: boolean;
  copyrightMsg?: string;
  brandName?: string;
}

export const Footer: FC<FooterProps> = ({
  transparent,
  copyrightMsg,
  brandName,
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
      pt={2}
      pb={3}
    >
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        style={{
          minHeight: '69px',
        }}
      >
        <Grid item xs={12}>
          <Box mb={1}>
            <Socials github twitter brandName={brandName} />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Body2 sx={{ color: 'white' }}>{copyrightMsg}</Body2>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
