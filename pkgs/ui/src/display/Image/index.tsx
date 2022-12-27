/* eslint-disable @next/next/no-img-element */

export interface ImageProps {
  src: string;
  title?: string;
  alt?: string;
  responsive?: boolean;
  sx?: React.CSSProperties;
}

export const Image = ({
  src,
  title = '',
  alt = '',
  responsive,
  sx,
}: ImageProps) => {
  let opts: React.CSSProperties = {};

  if (responsive) {
    opts = {
      width: '100%',
      height: 'auto',
    };
  }

  return (
    <img
      src={src}
      title={title}
      alt={alt}
      loading='lazy'
      style={{
        ...opts,
        userSelect: 'none',
        objectFit: 'cover',
        display: 'inline-block',
        ...sx,
      }}
    />
  );
};
