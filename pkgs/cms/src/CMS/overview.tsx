import React from 'react';
import { Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { Body2, H1, Caption, Subtitle2, Link } from '@d2xyz/ui';
import { type CMSCollection } from '../types';
import { CMSContentCard } from './card';
import { CMSContentBody } from './body';

export interface CMSContentOverviewProps {
  item: CMSCollection;
  collection?: CMSCollection | null;
}

export const CMSContentOverview = ({
  item,
  collection,
}: CMSContentOverviewProps) => {
  return (
    <Box p={1}>
      <Box>
        {collection && (
          <Link href={collection.link} decoration>
            <Subtitle2 sx={{ fontWeight: 'bold' }}>
              {collection.title}
            </Subtitle2>
          </Link>
        )}
        <H1>{item.title}</H1>
        <Caption color='textSecondary' gutterBottom>
          {dayjs(item.publishedAt).format(`DD MMM 'YY`)}
        </Caption>
        {item.description && <Body2 paragraph>{item.description}</Body2>}
        {item.body && <CMSContentBody item={item} />}
        {item.items && (
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            spacing={2}
            py={2}
          >
            {item.items.map((i) => (
              <Grid item key={i._id}>
                {i.link || i.external ? (
                  <Link
                    href={(i.link || i.external) as string}
                    external={!!i.external}
                    title={i.title}
                  >
                    <CMSContentCard
                      title={i.title}
                      description={i.description}
                      img={i.image?.asset.url}
                      date={i.publishedAt}
                    />
                  </Link>
                ) : (
                  <CMSContentCard
                    title={i.title}
                    description={i.description}
                    img={i.image.asset.url}
                    date={i.publishedAt}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};
