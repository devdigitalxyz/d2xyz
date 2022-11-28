import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type H3Props = Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  >

export const H3: FC<H3Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h3' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
