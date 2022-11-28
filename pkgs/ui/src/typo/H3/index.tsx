import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface H3Props
  extends Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  > {}

export const H3: FC<H3Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h3' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
