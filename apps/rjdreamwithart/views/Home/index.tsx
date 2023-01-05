import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1 } from '@d2xyz/ui';
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
            <LinkButton href='/' title='Dream With Art'>
              <Image
                src='static/img/rjdreamwithart-logo-alpha.png'
                alt='rjdreamwithart'
                title='rjdreamwithart'
                responsive
                sx={{
                  maxWidth: '600px',
                }}
              />
            </LinkButton>
          </Box>
          <Box textAlign='center' mb={3} mt={1}>
            <Subtitle1 paragraph>Unlimited AI Artworks</Subtitle1>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='Gallery'
              href='/gallery'
            >
              Gallery
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='FREE Art'
              external
              href='https://ricardojrmcom.gumroad.com/l/art-commission'
            >
              FREE Art
            </LinkButton>
          </Box>
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
