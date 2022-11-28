import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface H6Props
  extends Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  > {}

export const H6: FC<H6Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h6' component='h3' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
