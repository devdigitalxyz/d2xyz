import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import { type TypographyBaseProps } from '../TypographyBase';

export type H5Props = TypographyBaseProps & Pick<TypographyProps, 'children'>;

export const H5: FC<H5Props> = ({ children, ...props }) => {
  return (
    <Typography variant='h5' component='h2' {...props}>
      {children}
    </Typography>
  );
};
