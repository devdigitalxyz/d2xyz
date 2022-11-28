import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface H4Props
  extends Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  > {}

export const H4: FC<H4Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h4' component='h1' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
