import { Grid, Box } from '@mui/material';
import { Image, /* LinkButton, */ Subtitle1 } from '@d2xyz/ui';
import { HomeLayout } from '../../components/HomeLayout';

export const HomeView = () => {
  return (
    <HomeLayout>
      <Grid
        container
        sx={{
          minHeight: '100vh',
          color: '#fff',
          paddingTop: '81px',
          paddingBottom: '120px',
        }}
        alignItems='center'
        justifyContent='center'
      >
        <Grid item>
          <Box textAlign='center'>
            <Image
              src='static/img/ghostcopynet-logo-alpha.png'
              alt='ghostcopynet'
              title='ghostcopynet'
              responsive
              sx={{
                maxWidth: '480px',
              }}
            />
          </Box>
          <Box textAlign='center' mb={3}>
            <Subtitle1 paragraph>Ghostwriting - Copywriting</Subtitle1>
          </Box>
          {/* <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='outlined'
              fullWidth
              title='About me'
              href='/about'
            >
              About me
            </LinkButton>
          </Box> */}
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
