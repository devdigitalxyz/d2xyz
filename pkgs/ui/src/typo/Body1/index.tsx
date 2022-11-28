import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type Body1Props = Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  >

export const Body1: FC<Body1Props> = ({
  children,
  paragraph = true,
  ...props
}) => {
  return (
    <Typography variant='body1' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
