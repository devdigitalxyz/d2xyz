import { Grid, Box } from '@mui/material';
import { Layout, Image, LinkButton, LinkIcon, Header, Footer } from 'ui';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Logo = () => (
  <LinkButton href='/'>
    <Image
      responsive
      alt='Logo'
      src='/static/img/devdigitalxyz-logo-alpha.png'
      sx={{ maxHeight: '30px' }}
    />
  </LinkButton>
);

const Widgets = () => (
  <Grid container alignItems='center' spacing={1}>
    <Grid item>
      <LinkIcon external href='https://github.com/devdigitalxyz'>
        <GitHubIcon sx={{ color: '#fff' }} />
      </LinkIcon>
    </Grid>
    <Grid item>
      <LinkIcon external href='https://twitter.com/devdigitalxyz'>
        <TwitterIcon sx={{ color: '#fff' }} />
      </LinkIcon>
    </Grid>
  </Grid>
);

export const HomeView = () => {
  return (
    <Layout
      bgVideo='static/vid/devdigitalxyz-bg.mp4'
      bgGradient={{
        from: '#000000ea',
        to: '#1d1c1fea',
      }}
      header={
        <Header transparent home={<Logo />}>
          <Widgets />
        </Header>
      }
      footer={
        <Footer transparent copyrightMsg='Copyright © devdigital.xyz 2022' />
      }
    >
      <Grid
        container
        sx={{ minHeight: '100vh', color: '#fff' }}
        alignItems='center'
        justifyContent='center'
      >
        <Grid item>
          <Box textAlign='center'>
            <Image
              src='static/img/devdigitalxyz-logo-alpha.png'
              alt='@devdigitalxyz'
              title='@devdigitalxyz'
              sx={{
                maxWidth: '540px',
              }}
            />
          </Box>
          <Box textAlign='center'>
            <h2 className='mb-3 text-center text-white md:text-lg'>
              Fulfilling Web Development and Frontend Engineering for digital
              products
            </h2>
            <h1 className='text-md mb-3 text-center font-bold text-white'>
              @devdigitalxyz
            </h1>
          </Box>
          <Box textAlign='center'>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              external
              href='https://ricardojrmcom.gumroad.com/l/project-call'
            >
              Project Discovery Call (Free)
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};
