import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1 } from '@d2xyz/ui';
import { MetaTags } from '@d2xyz/ui/src/utils';
import { HomeLayout } from '../../components/HomeLayout';

export const ServicesView = () => {
  return (
    <HomeLayout>
      <MetaTags title='Services | Ricardo Mota' />
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
            <LinkButton href='/' title='Ricardo Mota'>
              <Image
                src='static/img/ricardojrmcom-logo-alpha.png'
                alt='ricardojrmcom'
                title='ricardojrmcom'
                responsive
                sx={{
                  maxWidth: '420px',
                }}
              />
            </LinkButton>
          </Box>
          <Box textAlign='center' mb={3} mt={1}>
            <Subtitle1 paragraph>Services</Subtitle1>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='outlined'
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
              variant='outlined'
              fullWidth
              title='Web Development'
              external
              href='https://www.devdigital.xyz/'
            >
              Web Development
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='outlined'
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
              variant='outlined'
              fullWidth
              title='Tech Copywriting'
              external
              href='https://www.ghostcopy.net/'
            >
              Tech Copywriting
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
