import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type Body2Props = Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  >

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
