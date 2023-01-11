import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1 } from '@d2xyz/ui';
import { MetaTags } from '@d2xyz/ui/src/utils';
import { HomeLayout } from '../../components/HomeLayout';

export const PartnersView = () => {
  return (
    <HomeLayout>
      <MetaTags title='Partners | Landing Web' />
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
            <LinkButton href='/' title='Landing Web'>
              <Image
                src='static/img/landingwebnet-logo-alpha.png'
                alt='landingwebnet'
                title='landingwebnet'
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
              href='https://www.devdigital.xyz/'
              title='Web Development'
            >
              Web Development
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              external
              href='https://www.ricardojrm.com/'
              title='Deployed by Ricardo Mota'
            >
              Deployed by Ricardo Mota
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
