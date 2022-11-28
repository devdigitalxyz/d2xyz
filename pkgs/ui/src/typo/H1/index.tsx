import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface H1Props
  extends Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  > {}

export const H1: FC<H1Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h1' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
