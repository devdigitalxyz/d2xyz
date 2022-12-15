import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1 } from 'ui';
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
              src='static/img/ricardojrmcom-logo-alpha.png'
              alt='ricardojrmcom'
              title='ricardojrmcom'
              responsive
              sx={{
                maxWidth: '480px',
              }}
            />
          </Box>
          <Box textAlign='center' mb={3} mt={1}>
            <Subtitle1 paragraph>
              Building a portfolio of one-person businesses
            </Subtitle1>
          </Box>
          {/* <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='outlined'
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
              variant='outlined'
              fullWidth
              title='Books'
              href='/books'
            >
              Books
            </LinkButton>
          </Box> */}
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='outlined'
              fullWidth
              title='Services'
              href='/services'
            >
              Services
            </LinkButton>
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
