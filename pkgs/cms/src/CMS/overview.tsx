import React from 'react';
import { Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { Image, Subtitle1, Body1, Body2, Link, LinkButton } from 'ui';
import { type ContentCollection, type ContentItem } from '../useContent';
import { CMSContentCard } from './card';

export interface CMSContentOverviewProps {
  item?: ContentCollection | ContentItem;
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
            <Box pb={1}>
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
            >
              {item.items.map((i) => (
                <Grid item key={i.title}>
                  {i.slug || i.external ? (
                    <Link
                      href={(i.slug || i.external) as string}
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
            <Box textAlign='center'>
              <Image src={item.img} alt={item.title} title={item.title} />
            </Box>
          )}
        </Box>
      ) : (
        item.body
      )}
    </Box>
  );
};
