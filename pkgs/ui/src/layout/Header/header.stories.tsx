import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { Box, Grid, useTheme } from '@mui/material';
import { Button } from 'ui';
// import { Button, SwitchThemes, SwitchLocales, ToggleDarkMode } from 'ui';
// import { themesRecord } from 'themes';
// import { IntlRecord } from 'intl';
// import { AuthDialog } from 'auth';
import { toast } from 'react-toastify';
import { sleep } from 'scripts';

const intlRecord = {
  en: {
    key: 'en',
    label: 'English',
    msgs: {
      example: 'Example EN',
    },
  },
  pt: {
    key: 'pt',
    label: 'Portuguese',
    msgs: {
      example: 'Example PT',
    },
  },
};

export default {
  title: 'Layout/Header Story',
  parameters: {
    componentSubtitle: 'Header Component',
  },
} as Meta;

const onLogin = async () => {
  await sleep(3000);
  toast.success('Login success');
};
const onLogout = async () => {
  await sleep(3000);
  toast.success('Logout success');
};
const onSignup = async () => {
  await sleep(3000);
  toast.success('Register success');
};

export const Header = ({ transparent }: { transparent?: boolean }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: transparent
          ? 'transparent'
          : theme.palette.primary.main,
        color: '#fff',
      }}
      px={{ md: 3, lg: 6 }}
    >
      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
        sx={{
          minHeight: '60px',
        }}
      >
        <Grid item>
          <Button variant='text' sx={{ color: '#fff' }}>
            LOGO
          </Button>
        </Grid>
        <Grid item>
          {/* <Grid container spacing={1}>
            <Grid item>
              <ToggleDarkMode sx={{ color: '#fff' }} />
            </Grid>
            <Grid item>
              <SwitchThemes themes={themesRecord} sx={{ color: '#fff' }} />
            </Grid>
            <Grid item>
              <SwitchLocales intlRecord={intlRecord} sx={{ color: '#fff' }} />
            </Grid>
            <Grid item>
              <AuthDialog
                onLogin={onLogin}
                onLogout={onLogout}
                onSignup={onSignup}
                btnProps={{ color: 'secondary' }}
              />
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export const Default: Story = () => {
  return <Header />;
};
