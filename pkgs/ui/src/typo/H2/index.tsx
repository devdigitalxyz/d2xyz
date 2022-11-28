import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface H2Props
  extends Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  > {}

export const H2: FC<H2Props> = ({ children, paragraph = true, ...props }) => {
  return (
    <Typography variant='h2' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
