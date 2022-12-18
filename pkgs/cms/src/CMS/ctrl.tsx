import React, { useState, useCallback } from 'react';
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
  } = useContent();

  const updateText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      searchSet(e.target.value); // TODO
    },
    [searchSet],
  );

  const [expanded, setExpanded] = useLocalState<string | false>(
    false,
    'expand-search',
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
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
                  {
                    // map tags
                    // TODO
                  }
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Paper>
  );
};
