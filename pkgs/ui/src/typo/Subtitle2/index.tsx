import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import { type TypographyBaseProps } from '../TypographyBase';

export type Subtitle2Props = TypographyBaseProps &
  Pick<TypographyProps, 'children'>;

export const Subtitle2: FC<Subtitle2Props> = ({ children, ...props }) => {
  return (
    <Typography variant='subtitle2' component='h2' {...props}>
      {children}
    </Typography>
  );
};
