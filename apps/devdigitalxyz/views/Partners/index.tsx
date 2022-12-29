import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1 } from '@d2xyz/ui';
import { MetaTags } from '@d2xyz/ui/src/utils';
import { HomeLayout } from '../../components/HomeLayout';

export const PartnersView = () => {
  return (
    <HomeLayout>
      <MetaTags title='Partners | D2XYZ' />
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
            <LinkButton href='/' title='D2XYZ Web Development'>
              <Image
                src='static/img/devdigitalxyz-logo-alpha.png'
                alt='devdigitalxyz'
                title='devdigitalxyz'
                responsive
                sx={{
                  maxWidth: '450px',
                }}
              />
            </LinkButton>
          </Box>
          <Box textAlign='center' mb={3} mt={1}>
            <Subtitle1 paragraph>Partners</Subtitle1>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='Web Design'
              external
              href='https://www.landingweb.net/'
            >
              Web Design
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='AI Concept Art'
              external
              href='https://www.dreamwith.art/'
            >
              AI Concept Art
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='Tech Copywriting'
              external
              href='https://www.ghostcopy.net/'
            >
              Tech Copywriting
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              external
              href='https://www.ricardojrm.com/'
              title='Code by Ricardo Mota'
            >
              Code by Ricardo Mota
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
