import { Grid, Box } from '@mui/material';
import {
  Layout,
  Image,
  LinkButton,
  LinkIcon,
  Header,
  Footer,
  Subtitle1,
  Subtitle2,
} from 'ui';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Logo = () => (
  <LinkButton href='/'>
    <Image
      responsive
      alt='Logo'
      src='/static/img/devdigitalxyz-logo-alpha.png'
      sx={{ maxHeight: '39px' }}
    />
  </LinkButton>
);

const Widgets = () => (
  <Grid container alignItems='center' spacing={1}>
    <Grid item>
      <LinkIcon external href='https://github.com/devdigitalxyz'>
        <GitHubIcon sx={{ color: '#fff', fontSize: '27px' }} />
      </LinkIcon>
    </Grid>
    <Grid item>
      <LinkIcon external href='https://twitter.com/devdigitalxyz'>
        <TwitterIcon sx={{ color: '#fff', fontSize: '27px' }} />
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
              alt='devdigitalxyz'
              title='devdigitalxyz'
              responsive
              sx={{
                maxWidth: '540px',
              }}
            />
          </Box>
          <Box textAlign='center' mb={3}>
            <Subtitle1 paragraph>@devdigitalxyz</Subtitle1>
            <Subtitle2 paragraph>
              Fulfilling Web Development and Frontend Engineering for digital
              products
            </Subtitle2>
          </Box>
          <Box textAlign='center' my={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              external
              title='Project Discovery Call (Free)'
              href='https://ricardojrmcom.gumroad.com/l/project-call'
            >
              Project Discovery Call (Free)
            </LinkButton>
          </Box>
          <Box textAlign='center' my={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              external
              title='Link Tree'
              href='https://ricardojrmcom.gumroad.com/l/link-tree'
            >
              Link Tree 🎄
            </LinkButton>
          </Box>
          <Box textAlign='center' my={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              external
              title='Landing Page'
              href='https://ricardojrmcom.gumroad.com/l/landing-page'
            >
              Landing Page 🚀
            </LinkButton>
          </Box>
          <Box textAlign='center' my={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              external
              title='Marketing Website'
              href='https://ricardojrmcom.gumroad.com/l/websites'
            >
              Marketing Website 🔥
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};
