import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1, Subtitle2 } from 'ui';
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
            <Image
              src='static/img/ricardojrmcom-logo-alpha.png'
              alt='ricardojrmcom'
              title='ricardojrmcom'
              responsive
              sx={{
                maxWidth: '540px',
              }}
            />
          </Box>
          <Box textAlign='center' mb={3}>
            <Subtitle1 paragraph>@ricardojrmcom</Subtitle1>
            <Subtitle2 paragraph>
              Fulfilling Web Development and Frontend Engineering for digital
              products
            </Subtitle2>
          </Box>
          <Box textAlign='center' mt={1.5} mb={6}>
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
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
