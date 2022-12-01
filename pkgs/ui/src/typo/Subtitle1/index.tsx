import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import { type TypographyBaseProps } from '../TypographyBase';

export type Subtitle1Props = TypographyBaseProps &
  Pick<TypographyProps, 'children'>;

export const Subtitle1: FC<Subtitle1Props> = ({ children, ...props }) => {
  return (
    <Typography variant='subtitle1' component='h1' {...props}>
      {children}
    </Typography>
  );
};
