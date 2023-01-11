/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
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
      // blocks: {
      //   h1: ({ value }: any) => <H1>{value}</H1>,
      //   h2: ({ value }: any) => <H2>{value}</H2>,
      //   h3: ({ value }: any) => <H3>{value}</H3>,
      //   normal: ({ value }: any) => <Body1>{value}</Body1>,
      // },
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
        imgBlog: ({ value }) => {
          return (
            <div style={{ textAlign: 'center' }}>
              <Image
                // TODO: fix types
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                src={imageUrlBuilder(cfg).image(value.image).url()}
                responsive
                alt=''
                title=''
                sx={{ maxHeight: '30vh', maxWidth: 'auto' }}
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
