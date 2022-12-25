import React from 'react';
import { Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { Image, Subtitle1, Body1, Body2, Link, LinkButton } from '@d2xyz/ui';
import { type CMSCollection } from '../types';
import { CMSContentCard } from './card';
import { CMSContentBody } from './body';

export interface CMSContentOverviewProps {
  item: CMSCollection;
}

export const CMSContentOverview = ({ item }: CMSContentOverviewProps) => {
  console.log({ item });
  return (
    <Box p={1}>
      <Box>
        <Subtitle1>{item.title}</Subtitle1>
        <Body2 color='textSecondary' gutterBottom>
          {dayjs(item.publishedAt).format(`DD MMM 'YY`)}
        </Body2>
        {item.description && <Body1 paragraph>{item.description}</Body1>}
        {item.actions && (
          <Box>
            <Grid container alignItems='center' spacing={1}>
              {item.actions.map((actionStr) => {
                const action = actionStr.split('|||');
                return (
                  <Grid item key={action[0]}>
                    <LinkButton
                      color='primary'
                      href={action[1]}
                      external
                      variant='contained'
                    >
                      {action[0]}
                    </LinkButton>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}
        {item.body && <CMSContentBody item={item} />}
        {item.items ? (
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
                      img={i.image.asset.url}
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
        ) : (
          <Box textAlign='center' py={2}>
            <Image
              src={item.image.asset.url}
              alt={item.title}
              title={item.title}
              responsive
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
