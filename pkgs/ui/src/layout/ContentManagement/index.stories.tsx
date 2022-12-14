import React, { useCallback } from 'react';
import type { Meta } from '@storybook/react';
import { Box, Paper, Grid, Button, Typography, TextField } from '@mui/material';
import { Image, Link } from '../../display';
import { useContent } from '../../../../hooks/src/useContent';

export default {
  title: 'Layout/Content Management',
  parameters: {
    componentSubtitle: 'ContentManagement Component',
  },
} as Meta;

export const Default = () => {
  const {
    itemsDisplay,
    filters,
    filtersSet,
    orderBy,
    orderBySet,
    orderDir,
    orderDirSet,
    search,
    searchSet,
    tags,
  } = useContent();

  const updateText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      searchSet(e.target.value);
    },
    [searchSet],
  );

  return (
    <Box>
      <Box>
        <Box>Search</Box>
        <Box>
          <TextField
            type='text'
            fullWidth
            label='Search'
            value={search}
            onChange={updateText}
          />
        </Box>
      </Box>
      <Box>
        <Box>Filters</Box>
        <Box>
          <Grid container spacing={1.5}>
            {tags.map((tag, i) => {
              return (
                <Grid item key={i}>
                  <Button
                    color='primary'
                    variant={filters.includes(tag) ? 'contained' : 'outlined'}
                    onClick={() => {
                      // toggle filter
                      if (filters.includes(tag)) {
                        filtersSet(filters.filter((f) => f !== tag));
                      } else {
                        filtersSet([...filters, tag]);
                      }
                    }}
                  >
                    {tag}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Box>
        <Box>Sort By</Box>
        <Box>
          <Grid container spacing={1.5}>
            <Grid item>
              <Button
                color='primary'
                variant={orderBy === 'date' ? 'contained' : 'outlined'}
                onClick={() => orderBySet('date')}
              >
                Date
              </Button>
            </Grid>
            <Grid item>
              <Button
                color='primary'
                variant={orderBy === 'title' ? 'contained' : 'outlined'}
                onClick={() => orderBySet('title')}
              >
                Title
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Box>Sort Direction</Box>
        <Box>
          <Grid container spacing={1.5}>
            <Grid item>
              <Button
                color='primary'
                variant={orderDir === 'asc' ? 'contained' : 'outlined'}
                onClick={() => orderDirSet('asc')}
              >
                Ascending
              </Button>
            </Grid>
            <Grid item>
              <Button
                color='primary'
                variant={orderDir === 'desc' ? 'contained' : 'outlined'}
                onClick={() => orderDirSet('desc')}
              >
                Descending
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box mt={3}>
        <Grid container spacing={3}>
          {itemsDisplay.map((item, i) => {
            return (
              <Grid item key={i}>
                <Paper>
                  <Link href='https://amzn.to/3FAm2Dw' external>
                    <Box p={1}>
                      <Box>
                        <Typography
                          textAlign='center'
                          sx={{ fontWeight: 'bold' }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      <Box>
                        <Image
                          src={item.img}
                          sx={{ maxHeight: '300px' }}
                          alt='book'
                        />
                      </Box>
                    </Box>
                  </Link>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
