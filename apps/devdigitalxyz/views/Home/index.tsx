import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1, Subtitle2 } from '@d2xyz/ui';
import { HomeLayout } from '../../components/HomeLayout';

export const HomeView = () => {
  return (
    <HomeLayout>
      <Grid
        container
        sx={{ minHeight: '100vh', color: '#fff' }}
        alignItems='center'
        justifyContent='center'
      >
        <Grid item>
          <Box textAlign='center'>
            <LinkButton href='/' title='D2XYZ Web Development'>
              <Image
                src='static/img/devdigitalxyz-logo-alpha.png'
                alt='devdigitalxyz'
                title='devdigitalxyz'
                responsive
                sx={{
                  maxWidth: '540px',
                }}
              />
            </LinkButton>
          </Box>
          <Box textAlign='center' mb={3}>
            <Subtitle1 paragraph>
              Fulfilling Web Development and Frontend Engineering for Digital
              Products
            </Subtitle1>
            <Subtitle2>Bookings are closed</Subtitle2>
          </Box>
          {/* <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='Content'
              href='/content'
            >
              Content
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='Portfolio'
              href='/content/portfolio'
            >
              Portfolio
            </LinkButton>
          </Box> */}
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='Partners'
              href='/partners'
            >
              Partners
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
