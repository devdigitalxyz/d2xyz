import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface Subtitle2Props
  extends Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  > {}

export const Subtitle2: FC<Subtitle2Props> = ({
  children,
  paragraph = true,
  ...props
}) => {
  return (
    <Typography variant='subtitle2' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
