import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type CaptionProps = Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  >

export const Caption: FC<CaptionProps> = ({
  children,
  paragraph = true,
  ...props
}) => {
  return (
    <Typography variant='caption' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
