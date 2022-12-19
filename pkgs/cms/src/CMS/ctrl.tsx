import React, { useCallback } from 'react';
import {
  Box,
  Paper,
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

  const [expanded, expandedSet] = useLocalState<string | false>(
    false,
    'expand-search',
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      expandedSet(isExpanded ? panel : false);
    };

  return (
    <Paper>
      <Box p={1}>
        <Box>
          <TextField
            type='text'
            fullWidth
            label='Search'
            placeholder='Search for an item...'
            value={search}
            onChange={updateText}
            size='small'
          />
        </Box>
        <Box>
          <Accordion
            elevation={0}
            sx={{ padding: 0 }}
            expanded={expanded === 'panel'}
            onChange={handleChange('panel')}
          >
            <AccordionSummary sx={{ padding: 0 }}>
              <Grid container alignItems='center' spacing={1}>
                <Grid item>
                  <Typography>
                    <FilterListIcon />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='body1'>Advanced Search</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Box pb={1}>
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
                                  sortBy === 'position'
                                    ? 'contained'
                                    : 'outlined'
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
                          <Typography variant='body2'>
                            Sort Direction
                          </Typography>
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
    </Paper>
  );
};
