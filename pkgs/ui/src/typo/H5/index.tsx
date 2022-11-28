import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface H5Props
  extends Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  > {}

export const H5: FC<H5Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h5' component='h2' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
