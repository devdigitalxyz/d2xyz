import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type H4Props = Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  >

export const H4: FC<H4Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h4' component='h1' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
