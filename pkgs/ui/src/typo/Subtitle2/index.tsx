import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type Subtitle2Props = Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  >

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
