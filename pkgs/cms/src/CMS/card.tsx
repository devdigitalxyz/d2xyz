import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { Image } from '@d2xyz/ui';

export interface CMSContentCardProps {
  title: string;
  img: string;
  date: string;
  description?: string;
}

export const CMSContentCard = ({
  title,
  img,
  date,
  description,
}: CMSContentCardProps) => {
  return (
    <div>
      <Paper sx={{ maxWidth: '272px' }}>
        <Box>
          <Box
            textAlign='center'
            sx={{ height: '225px', width: '272px', overflow: 'hidden' }}
            mx='auto'
          >
            <Image
              src={img}
              alt={title}
              title={title}
              responsive
              sx={{ borderRadius: '4px', objectFit: 'cover' }}
            />
          </Box>
          <Box
            p={1}
            sx={{
              height: '75px',
              overflow: 'hidden',
            }}
          >
            <Typography
              variant='subtitle2'
              component='h1'
              sx={{ fontWeight: 'bold' }}
            >
              {title}
            </Typography>
            <Typography variant='caption' color='textSecondary'>
              {dayjs(date).format(`DD MMM 'YY`)}
            </Typography>
            <Box
              sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              <Typography variant='body2'>{description}</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};
