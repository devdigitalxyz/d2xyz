import React from 'react';
import { Box, Grid } from '@mui/material';
import { Link } from '@d2xyz/ui';
import { useContent } from '../useContent';
import { CMSContentCard } from './card';

export const CMSContent = () => {
  const { display } = useContent();

  return (
    <Box mt={3} p={1}>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        {display.map((item) => {
          return (
            <Grid item key={item._id}>
              {item.link || item.external ? (
                <Link
                  href={(item.link || item.external) as string}
                  external={!!item.external}
                  title={item.title}
                >
                  <CMSContentCard
                    title={item.title}
                    description={item.description}
                    img={item.image.asset.url}
                    date={item.publishedAt}
                  />
                </Link>
              ) : (
                <CMSContentCard
                  title={item.title}
                  description={item.description}
                  img={item.image.asset.url}
                  date={item.publishedAt}
                />
              )}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
