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
  title = 'Title',
  alt = 'Image',
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
      style={{ ...opts, userSelect: 'none', display: 'inline-block', ...sx }}
    />
  );
};
