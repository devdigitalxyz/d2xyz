import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface Body1Props
  extends Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  > {}

export const Body1: FC<Body1Props> = ({
  children,
  paragraph = true,
  ...props
}) => {
  return (
    <Typography variant='body1' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
