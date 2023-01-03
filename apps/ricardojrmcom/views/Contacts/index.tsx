import { useState } from 'react';
import { Grid, Box, TextField, Paper } from '@mui/material';
import { Image, LinkButton, Button, Subtitle1, Caption } from '@d2xyz/ui';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { HomeLayout } from '../../components/HomeLayout';

const SITEKEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY || '';

export const ContactsView = () => {
  const [isHuman, isHumanSet] = useState(false);

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
        <Grid item md={6}>
          <Box textAlign='center'>
            <LinkButton href='/' title='Ricardo Mota'>
              <Image
                src='static/img/ricardojrmcom-logo-alpha.png'
                alt='ricardojrmcom'
                title='Ricardo Mota'
                responsive
                sx={{
                  maxWidth: '210px',
                }}
              />
            </LinkButton>
          </Box>
          <Box textAlign='center' mb={3} mt={1}>
            <Subtitle1 paragraph>Contact Me</Subtitle1>
          </Box>
          <Paper>
            <Formik
              initialValues={{
                name: '',
                email: '',
                message: '',
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                if (!values.name) {
                  toast.error('Name is required');
                }
                if (!values.email) {
                  toast.error('Email is required');
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  toast.error('Invalid email address');
                }
                if (!values.message) {
                  toast.error('Message is required');
                }

                const req = await fetch('/api/v1/submit-contactform', {
                  method: 'POST',
                  body: JSON.stringify(values),
                });
                const result = await req.json();

                if (result.success) {
                  toast.success('Message sent successfully');

                  resetForm();
                  setSubmitting(false);
                } else {
                  toast.error(result.error);
                  setSubmitting(false);
                }
              }}
            >
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <Box textAlign='center' px={1} py={2}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <TextField
                          size='small'
                          fullWidth
                          label='Name'
                          required
                          type='text'
                          name='name'
                          onChange={handleChange}
                          value={values.name}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          size='small'
                          fullWidth
                          label='Email'
                          required
                          type='email'
                          name='email'
                          onChange={handleChange}
                          value={values.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          size='small'
                          fullWidth
                          label='Message'
                          required
                          multiline
                          rows={6}
                          type='text'
                          name='message'
                          onChange={handleChange}
                          value={values.message}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Caption>
                          This data will be used for reply purposes only
                        </Caption>
                      </Grid>
                      <Grid item xs={12}>
                        <Box>
                          <HCaptcha
                            sitekey={SITEKEY}
                            onVerify={() => isHumanSet(true)}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box>
                          <Button
                            type='submit'
                            disabled={isSubmitting || !isHuman}
                          >
                            Submit
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
