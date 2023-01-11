import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1, Subtitle2 } from '@d2xyz/ui';
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
            <LinkButton href='/' title='Landing Web'>
              <Image
                src='static/img/landingwebnet-logo-alpha.png'
                alt='landingwebnet'
                title='landingwebnet'
                responsive
                sx={{
                  maxWidth: '480px',
                }}
              />
            </LinkButton>
          </Box>
          <Box textAlign='center' mb={3}>
            <Subtitle1 paragraph>Land your Business on the Web</Subtitle1>
            <Subtitle2 gutterBottom>🎨 Beautiful Web Design 🎨</Subtitle2>
            <Subtitle2 gutterBottom>
              🤖 Effective Internet Marketing 🤖
            </Subtitle2>
            <Subtitle2 gutterBottom>
              🚀 High Converting Landing Pages 🚀
            </Subtitle2>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
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
