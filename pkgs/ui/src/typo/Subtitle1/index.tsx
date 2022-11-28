import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type Subtitle1Props = Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  >

export const Subtitle1: FC<Subtitle1Props> = ({
  children,
  paragraph = true,
  ...props
}) => {
  return (
    <Typography variant='subtitle1' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
