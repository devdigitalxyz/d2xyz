import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface Body2Props
  extends Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  > {}

export const Body2: FC<Body2Props> = ({
  children,
  paragraph = true,
  ...props
}) => {
  return (
    <Typography variant='body2' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
