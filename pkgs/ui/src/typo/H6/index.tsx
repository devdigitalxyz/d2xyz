import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type H6Props = Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  >

export const H6: FC<H6Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h6' component='h3' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
