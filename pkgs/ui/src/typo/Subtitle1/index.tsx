import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface Subtitle1Props
  extends Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  > {}

export const Subtitle1: FC<Subtitle1Props> = ({
  children,
  paragraph = true,
  ...props
}) => {
  return (
    <Typography variant='subtitle1' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
