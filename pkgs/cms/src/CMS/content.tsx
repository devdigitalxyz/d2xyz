import React from 'react';
import { Box, Paper, Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { Image } from 'ui';
import { useContent } from '../useContent';

export const CMSContent = () => {
  const { display } = useContent();

  return (
    <Box mt={3} p={1}>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        {display.map((item, i) => {
          return (
            <Grid item key={i}>
              <Paper>
                <Box py={1}>
                  <Box pb={1}>
                    <Typography
                      variant='subtitle1'
                      component='h1'
                      textAlign='center'
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Box
                    textAlign='center'
                    sx={{ height: '360px', width: '360px' }}
                  >
                    <Image src={item.img} alt={item.title} title={item.title} />
                  </Box>
                  <Box>
                    <Typography textAlign='center' color='textSecondary'>
                      {dayjs(item.date).format(`DD MMM 'YY`)}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
