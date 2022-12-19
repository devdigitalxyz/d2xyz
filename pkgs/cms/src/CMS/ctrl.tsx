import React, { useCallback } from 'react';
import {
  Box,
  Grid,
  Button,
  Typography,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useLocalState } from 'hooks';
import { stringCapitalize } from 'scripts';
import { useContent } from '../useContent';
import FilterListIcon from '@mui/icons-material/FilterList';

export const CMSCtrl = () => {
  const {
    sortBy,
    sortBySet,
    sortDir,
    sortDirSet,
    search,
    searchSet,
    tags,
    viewOptSet,
    viewOpt,
    filters,
    filtersSet,
    lsid,
  } = useContent();

  const updateText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // TODO: Fix TS error
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      searchSet(e.target.value);
    },
    [searchSet],
  );

  const handleFilters = useCallback(
    (tag: string) => {
      if (filters.includes(tag)) {
        filtersSet(filters.filter((f) => f !== tag));
      } else {
        filtersSet([...filters, tag]);
      }
    },
    [filters, filtersSet],
  );

  const [expanded, expandedSet] = useLocalState<boolean>(
    false,
    `${lsid}-showfilters`,
  );

  const toggleExpanded = useCallback(() => {
    expandedSet((t) => !t);
  }, [expandedSet]);

  return (
    <Box>
      <Box p={1}>
        <Grid container alignItems='center' spacing={1}>
          <Grid item xs={8} md={9} lg={10}>
            <TextField
              type='text'
              fullWidth
              label='Search'
              placeholder='Search for an item...'
              value={search}
              onChange={updateText}
              size='small'
            />
          </Grid>
          <Grid item xs={4} md={3} lg={2}>
            <Button
              variant='contained'
              fullWidth
              startIcon={<FilterListIcon />}
              onClick={toggleExpanded}
            >
              Filters
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Accordion elevation={0} sx={{ padding: 0 }} expanded={expanded}>
          <AccordionSummary
            sx={{ padding: 0, margin: 0, height: 0, display: 'none' }}
          />
          <AccordionDetails sx={{ padding: 0 }}>
            <Box p={1}>
              <Box>
                <Grid container alignItems='center' spacing={2}>
                  <Grid item>
                    <Box>
                      <Box>
                        <Typography variant='body2'>View Options</Typography>
                      </Box>
                      <Box>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Button
                              size='small'
                              color='primary'
                              variant={
                                viewOpt === 'collections'
                                  ? 'contained'
                                  : 'outlined'
                              }
                              onClick={() => viewOptSet('collections')}
                            >
                              Collections
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              size='small'
                              color='primary'
                              variant={
                                viewOpt === 'items' ? 'contained' : 'outlined'
                              }
                              onClick={() => viewOptSet('items')}
                            >
                              Items
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box>
                      <Box>
                        <Typography variant='body2'>Sort By</Typography>
                      </Box>
                      <Box>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Button
                              size='small'
                              color='primary'
                              variant={
                                sortBy === 'date' ? 'contained' : 'outlined'
                              }
                              onClick={() => sortBySet('date')}
                            >
                              Date
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              size='small'
                              color='primary'
                              variant={
                                sortBy === 'title' ? 'contained' : 'outlined'
                              }
                              onClick={() => sortBySet('title')}
                            >
                              Title
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              size='small'
                              color='primary'
                              variant={
                                sortBy === 'position' ? 'contained' : 'outlined'
                              }
                              onClick={() => sortBySet('position')}
                            >
                              Position
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box>
                      <Box>
                        <Typography variant='body2'>Sort Direction</Typography>
                      </Box>
                      <Box>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Button
                              size='small'
                              color='primary'
                              variant={
                                sortDir === 'asc' ? 'contained' : 'outlined'
                              }
                              onClick={() => sortDirSet('asc')}
                            >
                              Ascending
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              size='small'
                              color='primary'
                              variant={
                                sortDir === 'desc' ? 'contained' : 'outlined'
                              }
                              onClick={() => sortDirSet('desc')}
                            >
                              Descending
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box pt={1}>
                <Grid container alignItems='center' spacing={2}>
                  {
                    // filter tags
                    Object.entries(tags).map(([key, value]) => {
                      return (
                        <Grid item key={key}>
                          <Box>
                            <Box>
                              <Typography variant='body2'>
                                {stringCapitalize(key, true)}
                              </Typography>
                            </Box>
                            <Box>
                              <Grid container spacing={1}>
                                {value.map((tag) => {
                                  return (
                                    <Grid item key={`${key}-${tag}`}>
                                      <Button
                                        size='small'
                                        color='primary'
                                        variant={
                                          filters.includes(tag)
                                            ? 'contained'
                                            : 'outlined'
                                        }
                                        onClick={() => handleFilters(tag)}
                                      >
                                        {stringCapitalize(tag, true)}
                                      </Button>
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </Box>
                          </Box>
                        </Grid>
                      );
                    })
                  }
                </Grid>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
