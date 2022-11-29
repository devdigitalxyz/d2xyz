import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import { type TypographyBaseProps } from '../TypographyBase';

export type H6Props = TypographyBaseProps & Pick<TypographyProps, 'children'>;

export const H6: FC<H6Props> = ({ children, ...props }) => {
  return (
    <Typography variant='h6' component='h3' {...props}>
      {children}
    </Typography>
  );
};
