import React from 'react';
import { Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { Image, Subtitle1, Body1, Body2, Link, LinkButton } from 'ui';
import { type ContentItem } from '../useContent';
import { CMSContentCard } from './card';

export interface CMSContentOverviewProps {
  item?: ContentItem;
}

export const CMSContentOverview = ({ item }: CMSContentOverviewProps) => {
  if (!item) {
    return null;
  }
  return (
    <Box p={1}>
      {!item.body ? (
        <Box>
          <Subtitle1>{item.title}</Subtitle1>
          <Body2 color='textSecondary' gutterBottom>
            {dayjs(item.date).format(`DD MMM 'YY`)}
          </Body2>
          {item.description && <Body1 paragraph>{item.description}</Body1>}
          {item.actions && (
            <Box>
              <Grid container alignItems='center' spacing={1}>
                {item.actions.map((action) => (
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
                ))}
              </Grid>
            </Box>
          )}
          {item.items ? (
            <Grid
              container
              alignItems='center'
              justifyContent='center'
              spacing={2}
              py={2}
            >
              {Object.values(item.items).map((i) => (
                <Grid item key={i.title}>
                  {i.link || i.external ? (
                    <Link
                      href={(i.link || i.external) as string}
                      external={!!i.external}
                      title={i.title}
                    >
                      <CMSContentCard
                        title={i.title}
                        description={i.description}
                        img={i.img}
                        date={i.date}
                      />
                    </Link>
                  ) : (
                    <CMSContentCard
                      title={i.title}
                      description={i.description}
                      img={i.img}
                      date={i.date}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box textAlign='center' py={2}>
              <Image
                src={item.img}
                alt={item.title}
                title={item.title}
                responsive
              />
            </Box>
          )}
        </Box>
      ) : (
        item.body
      )}
    </Box>
  );
};
