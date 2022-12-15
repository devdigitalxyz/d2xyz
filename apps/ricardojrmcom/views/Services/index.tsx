import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1 } from 'ui';
import { HomeLayout } from '../../components/HomeLayout';

export const ServicesView = () => {
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
            <Subtitle1 paragraph>Services</Subtitle1>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='outlined'
              fullWidth
              title='About me'
              external
              href='https://www.devdigital.xyz/'
            >
              Web Development
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
