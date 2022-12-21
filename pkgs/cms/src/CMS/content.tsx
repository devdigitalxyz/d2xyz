import React from 'react';
import { Box, Grid } from '@mui/material';
import { Link } from 'ui';
import { useContent } from '../useContent';
import { CMSContentCard } from './card';

export const CMSContent = () => {
  const { display } = useContent();

  return (
    <Box mt={3} p={1}>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        {display.map((item) => {
          return (
            <Grid item key={item.title}>
              {item.slug || item.external ? (
                <Link
                  href={(item.slug || item.external) as string}
                  external={!!item.external}
                  title={item.title}
                >
                  <CMSContentCard
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    date={item.date}
                  />
                </Link>
              ) : (
                <CMSContentCard
                  title={item.title}
                  description={item.description}
                  img={item.img}
                  date={item.date}
                />
              )}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
