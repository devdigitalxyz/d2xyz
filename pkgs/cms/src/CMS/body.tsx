/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { PortableText, type PortableTextProps } from '@portabletext/react';
import YouTube from 'react-youtube';
import imageUrlBuilder from '@sanity/image-url';
import { Image, H1, H2, H3, Body1, Link, LinkButton } from '@d2xyz/ui';
import { type CMSItem } from '../types';
import { useCMSConfig } from '../useContent';

export interface CMSContentBodyProps {
  item: CMSItem;
}

export const CMSContentBody = ({ item }: CMSContentBodyProps) => {
  const cfg = useCMSConfig();

  const components = useMemo<PortableTextProps<CMSItem>['components']>(
    () => ({
      block: {
        h1: ({ children }: any) => <H1>{children}</H1>,
        h2: ({ children }: any) => <H2>{children}</H2>,
        h3: ({ children }: any) => <H3>{children}</H3>,
        normal: ({ children }: any) => {
          if (!children[0]) return <Box py={1.5} />;
          return <Body1>{children}</Body1>;
        },
      },
      list: {
        bullet: ({ children }) => <ul style={{ margin: 0 }}>{children}</ul>,
      },
      marks: {
        linkBtn: ({ children, value }) => {
          const external = !value.href.startsWith('/');
          return (
            <LinkButton
              href={value.href}
              external={external}
              variant='contained'
            >
              {children}
            </LinkButton>
          );
        },
        link: ({ children, value }) => {
          const external = !value.href.startsWith('/');
          return (
            <Link href={value.href} external={external}>
              {children}
            </Link>
          );
        },
      },
      types: {
        image: ({ value }) => {
          return (
            <div style={{ textAlign: 'center' }}>
              <Image
                // TODO: fix types
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // src={''}
                src={imageUrlBuilder(cfg).image(value)?.url()}
                sx={{ maxWidth: '100%' }}
                alt=''
                title=''
              />
            </div>
          );
        },
        video: ({ value }) => (
          <div style={{ textAlign: 'center' }}>
            <YouTube videoId={value.videoId} />
          </div>
        ),
      },
    }),
    [cfg],
  );

  return <PortableText value={item.body} components={components} />;
};
