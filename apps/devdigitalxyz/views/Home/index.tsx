import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1 } from '@d2xyz/ui';
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
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='Blog'
              href='/blog'
            >
              Blog
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='Socials'
              href='/socials'
            >
              Socials
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
          {/* <Box textAlign='center' my={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              external
              title='Book a Project Discovery call'
              href='https://calendly.com/ricardojrmcom/project-discovery'
            >
              Book a Project Discovery call
            </LinkButton>
          </Box> */}
          {/* <Box textAlign='center' my={1.5}>
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
          </Box> */}
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
