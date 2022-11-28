import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type H1Props = Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  >

export const H1: FC<H1Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h1' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
