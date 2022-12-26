/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { PortableText, type PortableTextProps } from '@portabletext/react';
import YouTube from 'react-youtube';
import imageUrlBuilder from '@sanity/image-url';
import { Image, H4, H5, H6, Body1, LinkButton } from '@d2xyz/ui';
import { type CMSItem } from '../types';
import { useCMSConfig } from '../useContent';

export interface CMSContentBodyProps {
  item: CMSItem;
}

export const CMSContentBody = ({ item }: CMSContentBodyProps) => {
  const cfg = useCMSConfig();

  const components = useMemo<PortableTextProps<CMSItem>['components']>(
    () => ({
      blocks: {
        h1: ({ value }: any) => <H4>{value}</H4>,
        h2: ({ value }: any) => <H5>{value}</H5>,
        h3: ({ value }: any) => <H6>{value}</H6>,
        normal: ({ value }: any) => <Body1>{value}</Body1>,
      },
      marks: {
        link: ({ children, value }) => {
          const external = !value.href.startsWith('/');
          return (
            <LinkButton href={value.href} external={external}>
              {children}
            </LinkButton>
          );
        },
      },
      types: {
        image: ({ value }) => (
          <div style={{ textAlign: 'center' }}>
            <Image
              // TODO: fix types
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              src={imageUrlBuilder(cfg)
                .image(value)
                .fit('max')
                .auto('format')
                .url()}
              responsive
              alt=''
              title=''
            />
          </div>
        ),
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
