import React, { useState } from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { Image } from 'ui';

export interface CMSContentCardProps {
  title: string;
  description?: string;
  img: string;
  date: Date;
}

export const CMSContentCard = ({
  title,
  description = '',
  img,
  date,
}: CMSContentCardProps) => {
  const [hover, hoverSet] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => hoverSet(true)}
      onMouseLeave={() => hoverSet(false)}
    >
      <Paper sx={{ maxWidth: '360px' }}>
        <Box py={1}>
          <Grid
            pb={1}
            container
            sx={{
              height: '50px',
              overflow: 'hidden',
            }}
            alignItems='center'
          >
            <Grid item xs={12}>
              <Typography variant='subtitle1' component='h1' textAlign='center'>
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Box
            textAlign='center'
            sx={{ height: '360px', width: '360px' }}
            mx='auto'
          >
            {hover ? (
              description === '' ? (
                <Image src={img} alt={title} title={title} />
              ) : (
                <Box p={1}>
                  <Typography variant='body2' textAlign='left'>
                    {description}
                  </Typography>
                </Box>
              )
            ) : (
              <Image src={img} alt={title} title={title} />
            )}
          </Box>
          <Box>
            <Typography textAlign='center' color='textSecondary'>
              {dayjs(date).format(`DD MMM 'YY`)}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};
