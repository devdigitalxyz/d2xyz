import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type H2Props = Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  >

export const H2: FC<H2Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h2' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
