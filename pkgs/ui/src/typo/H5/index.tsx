import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type H5Props = Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  >

export const H5: FC<H5Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h5' component='h2' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
