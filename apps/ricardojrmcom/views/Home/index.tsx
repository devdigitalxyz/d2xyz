import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1, Subtitle2 } from 'ui';
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
          <Box textAlign='center' mb={3}>
            <Subtitle1 paragraph>@ricardojrmcom</Subtitle1>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='About me'
              href='https://ricardojrmcom.gumroad.com/l/project-call'
            >
              About me
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='About me'
              href='https://ricardojrmcom.gumroad.com/l/project-call'
            >
              About me
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='About me'
              href='https://ricardojrmcom.gumroad.com/l/project-call'
            >
              About me
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='About me'
              href='https://ricardojrmcom.gumroad.com/l/project-call'
            >
              About me
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
