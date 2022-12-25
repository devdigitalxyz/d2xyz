import React, { useMemo } from 'react';
import { PortableText, type PortableTextProps } from '@portabletext/react';
import YouTube from 'react-youtube';
import { Image } from '@d2xyz/ui';
import { type CMSItem } from '../types';
import { useCMSConfig } from '../useContent';
import imageUrlBuilder from '@sanity/image-url';

export interface CMSContentBodyProps {
  item: CMSItem;
}

export const CMSContentBody = ({ item }: CMSContentBodyProps) => {
  const cfg = useCMSConfig();

  const components = useMemo<PortableTextProps<CMSItem>['components']>(
    () => ({
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
