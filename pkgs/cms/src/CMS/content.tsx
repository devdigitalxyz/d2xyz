import React, { useCallback } from 'react';
import { Box, Paper, Grid, Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { Image, Link } from 'ui';
import { useContent } from '../useContent';

export const CMSContent = () => {
  const { display } = useContent();

  return (
    <Box mt={3}>
      <Grid container spacing={3}>
        {display.map((item, i) => {
          return (
            <Grid item key={i}>
              <Paper>
                <Box p={1}>
                  <Box>
                    <Typography textAlign='center' sx={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Box textAlign='center'>
                    <Image
                      src={item.img}
                      sx={{ maxHeight: '300px' }}
                      alt='book'
                    />
                  </Box>
                  <Box>
                    <Typography textAlign='center'>
                      {dayjs(item.date).format('DD/MM/YYYY')}
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
